import Link from "next/link";
import Image from "next/image";

import { Card, CardHeader } from "./ui/card";
import { Badge} from "./ui/badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';





export type projectDataProps = {
  image: string,
  category: string,
  name: string,
  description: string,
  link: string,
  github: string,
  
}

export const projectData = [
  {
    image: '/mars2.svg',
    category: 'Dashboard',
    name: 'Dashboard CRM',
    description: 'O projeto foi estruturado para gerar insights estratégicos sobre retenção, faturamento e performance de campanhas.',
    link:'https://app.powerbi.com/view?r=eyJrIjoiOWQ0YWZiODEtZTZkNS00MjBmLThjNzQtN2ViZjA3NWU1NzhmIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9',
    github: '/'
  },
  {
    image: '/rh2.svg',
    category: 'Dashboard',
    name: 'Dashboard RH',
    description: 'O projeto foi estruturado para analisar indicadores de pessoas para apoiar decisões relacionadas a retenção, desempenho e eficiência organizacional.',
    link:'https://app.powerbi.com/view?r=eyJrIjoiMGJkNTAzZmUtMmM1OS00YjZiLTg4MDEtOGNiMGYyY2RkNGE1IiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9',
    github: '/'
  },
  // {
  //   image: '/land3.png',
  //   category: 'Front',
  //   name: 'Pagina de Vendas - Ebook',
  //   description: 'Uma página de vendas focada em promover e vender um eBook, utilizando um layout simples e eficaz para conversão.',
  //   link:'https://github.com/',
  //   github: '/'
  // }
  

]

interface ProjectCardProps {
  project: projectDataProps; // Define que a prop project terá o tipo projectDataProps
}


export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader className="px-0 bg-slate-50">
        {/* Image*/}
        <div className="relative w-full h-[330px] flex justify-center items-center bg-slate-50 group">
          <Image 
            src={project.image} 
            width={400} 
            height={296} 
            priority
            alt={project.name} 
            className="absolute bottom-0 shadow-2xl"
          />
          {/* Link with hover effect */}
          <div>
            <Link
              href={project.link}
              className="bg-slate-900 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              target="blank"
            >
             <FontAwesomeIcon icon={faLink} className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6 ">
        <Badge className="bg-orange-main uppercase text-sm font-medium mb-2 absolute top-4 left-5">{project.category}</Badge>
        <h4 className="font-semibold text-xl mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-base">{project.description}</p>
      </div>
    </Card>
  );
}
