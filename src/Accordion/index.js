import Card from '../Card/index';

const panels = [
    {
        title: 'Add edit',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        title: 'Hello world',
        text: 'It is a long established fact that a reader will be distracted'
    },
    {
        title: 'Rofl import',
        text: 'It is a long established fact that a reader will be distracted ' +
            'by the readable content of a page when looking at its layout. '
    },
    {
        title: 'Funny momemt',
        text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,' +
            ' when an unknown printer took a galley of type and scrambled it to make a type specimen book.' +
            ' It has survived not only five centuries, but also the leap into electronic' +
            ' typesetting, remaining essentially unchanged. '
    }
];

export default () => (
    <div className='accordion-container'>
        {panels.map((item, index) => {
           return  <Card key={index} title={item.title} paragraph={item.text}/>
        })
        }
    </div>
);