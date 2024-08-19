import React from 'react'
import { Container, Wrapper } from '.'
import SectionBadge from './ui/section-badge'
import { perks } from '@/constants'

const Work = () => {
  return (
    <Wrapper className="flex items-center justify-center flex-col relative py-12">
                <Container >
                    <div className="max-w-md mx-auto text-start md:text-center" >
                        <SectionBadge title='The Process' />
                        <h2 className="text-3xl lg:text-4xl mt-6 font-semibold">
                        Three steps to build your dream website
                        </h2>
                        <p className="text-muted-foreground mt-6">
                        Turn your vision into reality in just 3 simple steps
                        </p>
                    </div>
                </Container>

                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 divide-y md:divide-x md:divide-y-0 divide-gray-900 lg:first:border-none first:border-gray-900 ">
                            {perks.map((perk)=>(
                                <div className="flex flex-col px-4 py-4 md:px-6 lg:px-8 lg:py-6" key={perk.title}>
                                    <div className="flex  ">
                                        <perk.icon className="w-8 h-8"/>
                                    
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {perk.title}
                                        </h3>
                                        <p className="text-muted-foreground mt-2 text-start ">
                                            {perk.info}
                                        </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>
  )
}

export default Work