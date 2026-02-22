import { GridContainer } from "../GridContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Teste(){
  return(
    <section className="bg-back-main2 bg-no-repeat">
      <GridContainer>
        <div>
          <h2 className="mb-5 text-center">Gabriel é o Rei</h2>
          <p className="text-center mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, totam! Quaerat, corrupti modi! Eaque, assumenda totam quod at tempore omnis. Ratione quisquam iure totam. Molestias nihil earum tempore eius quae veritatis libero nam praesentium aliquid esse eveniet molestiae aliquam at neque delectus, quos, suscipit magnam, nisi quisquam ut. Reiciendis quibusdam ratione asperiores expedita molestiae.</p>

          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos amet nobis sint minus!</p>
        
        </div>

      </GridContainer>
    </section>
  )
}