import DefaultLayout from "@/layouts/default";
import {Card, CardBody, CardHeader} from "@heroui/card";
import {Button} from "@heroui/button";

import { BeakerIcon, PlusIcon } from '@heroicons/react/24/solid'

export default function IndexPage() {
    const RenderTasks = () => {
        function getTimePeriod(startDate: string | number | Date) {
            const start = new Date(startDate);
            const now = new Date();

            // Вычисляем разность в днях
            // @ts-ignore
            const diffTime = Math.abs(now - start);
            const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            // Вычисляем месяцы и дни
            const months = Math.floor(totalDays / 30);
            const days = totalDays % 30;

            // Функция для склонения слов
            function declension(number: number, words: any[]) {
                const cases = [2, 0, 1, 1, 1, 2];
                return words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)]];
            }

            // Массивы для склонения
            const dayWords = ['день', 'дня', 'дней'];
            const monthWords = ['месяц', 'месяца', 'месяцев'];

            // Формируем результат
            let result = [];

            if (months > 0) {
                result.push(`${months} ${declension(months, monthWords)}`);
            }

            if (days > 0) {
                result.push(`${days} ${declension(days, dayWords)}`);
            }

            // Если прошло 0 дней
            if (result.length === 0) {
                return '0 дней';
            }

            return result.join(' и ');
        }

        const tasks: any[] = [
            {
                name: "Бросаю курить",
                timePeriod: getTimePeriod('2024-08-01')
            },
            {
                name: "Не смотрю шортсы",
                timePeriod: getTimePeriod('2025-06-01')
            },
            {
                name: "Стоп МУКА",
                timePeriod: getTimePeriod('2025-04-09')
            },
            {
                name: "Не ругаюсь матом",
                timePeriod: getTimePeriod('2025-07-01')
            },
        ]

        return (
            <div className="flex flex-col gap-3">
                {tasks ? tasks.map((item) => {
                    return (
                        <Card key={item.name} className="py-4">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <small className="text-default-500 text-lg">{item.timePeriod}</small>
                                <h4 className="font-bold text-large">{item.name}</h4>
                            </CardHeader>
                        </Card>
                    )
                }) : false}
            </div>
        )
    }
    const RenderAddTaskButton = () => {

        return (
            <div className="flex flex-col mt-3">
                <Button className="bg-opacity-10 h-auto">
                    <PlusIcon className="size-14 opacity-10" />
                </Button>
            </div>
        )
    }

    return (
        <DefaultLayout>
            <RenderTasks/>
            <RenderAddTaskButton/>
        </DefaultLayout>
    );
}
