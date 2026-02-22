import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { IconTitle } from "../IconTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export function Service(){
  return(
    <section className="mt-48">
      <GridContainer>
          <div>
            <IconTitle title="Área de atuação"/>
          </div>
        <div className=" flex flex-col lg:flex-row justify-center items-center mt-16 lg:mt-32 gap-8 lg:gap-32">
          <Card className="w-full max-w-[380px] h-[250px] border-slate-950  flex justify-center items-center relative mb-10 xl:mb-0 ">
            <CardHeader className="bg-white px-7 py-2 absolute -top-[45px] ">
              <Image
                src='/icon-code.svg'
                alt="Ilustração de código de Programação"
                width={75}
                height={75}
                className=""
              />
            </CardHeader>
            <CardContent className="text-center mt-9">
              <Dialog>
                <DialogTrigger>
                  <CardTitle className="mb-4 hover:text-orange-main transition-colors ease-out 100ms">Análise de Dados</CardTitle>
                  <CardDescription>Experiência em processos ETL, organização e tratamento de grandes volumes de dados, assegurando qualidade e consistência. Utilizo ferramentas de análise para identificar padrões, tendências e oportunidades que apoiam decisões estratégicas.</CardDescription>
                </DialogTrigger>
                <DialogContent className=" p-12 bg-white rounded-lg">
                <DialogHeader>
                <DialogTitle className="text-center mb-5">Análise de Dados</DialogTitle>
                <DialogDescription className="text-center">
                  <p className="mb-2 text-[15px]">Como analista de dados, minha atuação envolve a coleta, tratamento e interpretação de informações para gerar insights que apoiem decisões estratégicas. Utilizo processos ETL para garantir a qualidade e a consistência dos dados, transformando informações brutas em resultados claros e acionáveis.</p>
                  <p className="mb-2 text-[15px]"> Tenho experiência com ferramentas e linguagens como Power BI, Excel avançado, SQL e Python, além de bibliotecas como Pandas e Matplotlib, para análise e visualização de dados. Também aplico boas práticas de modelagem e organização, assegurando que as análises sejam precisas e replicáveis.</p>
                  <p className="mb-2 text-[15px]">Com um olhar analítico voltado tanto para o detalhe quanto para a visão estratégica, desenvolvo soluções que não apenas respondem a perguntas, mas revelam oportunidades, ajudando empresas a otimizar processos e alcançar melhores resultados.</p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
              </Dialog>
            </CardContent>

          </Card>
          <Card className="w-full max-w-[380px] h-[250px] border-slate-950 flex justify-center items-center relative">
            <CardHeader className="bg-white px-7 py-2 absolute -top-[45px] ">
              <Image
                src='/icon-design.svg'
                alt="Ilustração de uma tela com um pincel, representando o design"
                width={75}
                height={75}
                className=""
              />
            </CardHeader>
            <CardContent className="text-center mt-9">
              <Dialog>
                <DialogTrigger>
                  <CardTitle className=" mb-4 hover:text-orange-main transition-colors ease-out 100ms">Storytelling com Dados</CardTitle>
                  <CardDescription>Criação de dashboards e relatórios interativos com Power BI e Excel avançado. Habilidade em traduzir dados complexos em insights claros e objetivos, facilitando a comunicação entre áreas da empresa.</CardDescription>
                </DialogTrigger>
                <DialogContent className=" p-12 bg-white rounded-lg">
              <DialogHeader>
                <DialogTitle className="text-center mb-5">Visualização e Storytelling com Dados</DialogTitle>
                <DialogDescription className="text-center">
                  <p className="mb-2 text-[15px]">Apaixonado por transformar dados em informações claras e impactantes, com foco em criar visualizações que engajem e facilitem a tomada de decisões. Utilizando ferramentas como Power BI e Excel avançado, desenvolvo dashboards e relatórios interativos que permitem uma compreensão rápida e precisa das informações.</p>
                  <p className="mb-2 text-[15px]">Cada gráfico, métrica e indicador é escolhido para melhorar a clareza e a usabilidade das análises. Tenho um sólido entendimento de como a visualização influencia a interpretação de dados e trabalho para garantir que as informações sejam apresentadas de forma simples, intuitiva e estratégica.</p>
                </DialogDescription>
              </DialogHeader>
          
            </DialogContent>
              </Dialog>
            </CardContent>
            
          </Card>
        </div>
      </GridContainer>
    </section>
  )
}


