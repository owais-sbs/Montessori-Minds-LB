import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import ProgramCard from '../programs/ProgramCard'
import { StaggerContainer, StaggerItem } from '../animations'
import { programs } from '../../data/programs'
import { homePrograms } from '../../data/home'

export default function ProgramsSection() {
  return (
    <section className="bg-warm-cream py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={homePrograms.eyebrow}
          title={homePrograms.title}
          description={homePrograms.description}
          className="mb-12 md:mb-16"
        />
        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
          {programs.map((program) => (
            <StaggerItem key={program.id}>
              <ProgramCard program={program} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
