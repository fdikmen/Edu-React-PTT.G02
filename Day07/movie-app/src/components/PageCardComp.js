import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export const PageCardComp = ({movie}) => (
    <Card>
        <Image src={movie.avatar} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{movie.title}</Card.Header>
            <Card.Meta>
                <span className='date'>{movie.createdAt}</span>
            </Card.Meta>
            <Card.Description>
                {movie.type}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends
            </a>
        </Card.Content>
    </Card>
)

export default PageCardComp