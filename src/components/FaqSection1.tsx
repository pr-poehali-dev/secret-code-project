import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Чем индивидуальные стельки отличаются от аптечных?",
    answer:
      "Аптечные стельки — стандартные, они не учитывают особенности именно вашей стопы. Индивидуальные изделия изготавливаются по точным меркам и диагнозу, поэтому дают реальный терапевтический эффект.",
  },
  {
    question: "Нужно ли направление от врача?",
    answer:
      "Нет, направление не обязательно. Вы можете обратиться напрямую — наш специалист проведёт первичный осмотр и при необходимости направит к ортопеду.",
  },
  {
    question: "Сколько времени занимает изготовление?",
    answer:
      "Срок изготовления — от 20 дней после снятия мерок. Точные сроки уточняем при записи.",
  },
  {
    question: "Как долго служат ортопедические изделия?",
    answer:
      "Стельки из EVA — 1–1,5 года, из кожи и термопласта — 2–3 года при правильном уходе. Ортезы служат 3–5 лет. Мы проводим бесплатный осмотр и коррекцию по необходимости.",
  },
]

export function FaqSection1() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-2xl gap-12 mx-auto px-6 flex flex-col">
        <div className="flex flex-col text-center gap-5">
          <p className="text-sm md:text-base text-muted-foreground font-semibold">Вопросы</p>
          <h1 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Есть вопросы? У нас есть ответы.
          </h1>
          <p className="text-muted-foreground">
            Мы собрали самые частые вопросы о наших изделиях. Не нашли ответ?{" "}
            <a href="#" className="text-primary underline">
              Свяжитесь с нами.
            </a>
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-1" aria-label="Часто задаваемые вопросы">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-base font-medium text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-muted/60 w-full rounded-xl p-6 md:p-8 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">Остались вопросы?</h2>
            <p className="text-base text-muted-foreground">
              Запишитесь на бесплатную консультацию — специалист ответит на всё лично!
            </p>
          </div>
          <a href="tel:+79055021502">
            <Button aria-label="Записаться на консультацию">Записаться на консультацию</Button>
          </a>
        </div>
      </div>
    </section>
  )
}