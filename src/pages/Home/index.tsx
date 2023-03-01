import { createContext, useState } from "react";
import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import {
    HomeContainer,
    StartCountdownButton,
    StopCountdownButton,
} from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

interface CyclesContextType {
    activeCycle: Cycle | undefined;
    activeCycleId: string | null;
    amountSecondsPassed: number;
    markCurrentCycleAsFinished: () => void;
    setSecondsPassed: (seconds: number) => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

const newCycleFormValidationSchema = z.object({
    task: z.string().min(1, "Informe a tarefa"),
    minutesAmount: z
        .number()
        .min(5, "O ciclo precisa ser de no mínimo 5 minutos")
        .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
});
type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>;

export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: "",
            minutesAmount: 0,
        },
    });

    const { handleSubmit, watch, reset } = newCycleForm;

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds);
    }

    function markCurrentCycleAsFinished() {
        setCycles((state) =>
            state.map((cycle) => {
                if (cycle.id === activeCycleId) {
                    return {
                        ...cycle,
                        finishedDate: new Date(),
                    };
                } else {
                    return cycle;
                }
            }),
        );
    }

    function handleCreateNewCycle(data: NewCycleFormData) {
        const id = String(new Date().getTime());

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        };

        setCycles((state) => [...state, newCycle]);
        setActiveCycleId(id);
        setAmountSecondsPassed(0);

        reset();
    }

    function handleInterruptCycle() {
        setCycles((state) =>
            state.map((cycle) => {
                if (cycle.id === activeCycleId) {
                    return { ...cycle, interruptedDate: new Date() };
                } else {
                    return cycle;
                }
            }),
        );

        setActiveCycleId(null);
    }

    const task = watch("task");
    const isSubmitDisabled = !task;

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <CyclesContext.Provider
                    value={{
                        activeCycle,
                        activeCycleId,
                        markCurrentCycleAsFinished,
                        amountSecondsPassed,
                        setSecondsPassed,
                    }}
                >
                    <FormProvider {...newCycleForm}>
                        <NewCycleForm />
                    </FormProvider>
                    <Countdown />
                </CyclesContext.Provider>

                {activeCycle ? (
                    <StopCountdownButton
                        type="button"
                        onClick={handleInterruptCycle}
                    >
                        <HandPalm size={24} />
                        Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton
                        disabled={isSubmitDisabled}
                        type="submit"
                    >
                        <Play size={24} />
                        Começar
                    </StartCountdownButton>
                )}
            </form>
        </HomeContainer>
    );
}
