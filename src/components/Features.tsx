import React from 'react'
import { Container, Icons, Wrapper } from '.'
import SectionBadge from './ui/section-badge'
import { features } from '@/constants'

const Features = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center ">
                <Container>
                <div className="max-w-md mx-auto text-start md:text-center" >
                        <SectionBadge title='Features' />
                        <h2 className="text-3xl lg:text-4xl mt-6 font-semibold">
                        Discover our powerful features
                        </h2>
                        <p className="text-muted-foreground mt-6">
                        Astra offers a range of features to help you build a stunning website in no time
                        </p>

                    </div>
                </Container>

                <Container>
                    <div className="flex items-center justify-center mx-auto mt-8 ">
                        <Icons.feature className="w-auto h-80" />
                    </div>
                </Container>

                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                            {features.map((feature)=>(
                                <div className="flex flex-col px-4 py-4 md:px-6 lg:px-8 lg:py-6" key={feature.title}>
                                    <div className="flex">
                                        <feature.icon className="w-8 h-8"/>
                                    </div>
                                    <h3 className="font-medium text-lg pt-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2">
                                        {feature.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>
  )
}

export default Features