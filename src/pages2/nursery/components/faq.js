import React,{Fragment} from 'react'

const Faq = () => {

    const data = [
        {question:'Physical Development from Play',answer:(<Fragment>Play usually involves children making movements of some kind. Fine motor movements involving the use of the hands are developed through play as children explore objects and use toys and resources, such as sand and water. Locomotive movements and gross motormovements are developed as children move their bodies during play, throwing and also learning to coordinate their movements with equipment such as trikes. Children's stamina and other skills such as balance are developed as they enjoy playing.</Fragment>)},
        {question:'Cognitive Development from Play',answer:'Play helps children to explore their environment and to learn from it. They learn about the textures and properties of different objects by playing with them. They may, for example, learn that it is difficult to build a sandcastle with very wet sand. They also learn about the size and shape of objects. Through play, children also learn to think about and solve problems.'},
        {question:'Language Development from Play',answer:'As children develop their language, they use it to organise their play and so it is common to hear children talking as they play by themselves. Children also use language as they play with others and may use it as part of the play itself - like putting on voices - or to agree the direction of play with others.'},
        {question:'Emotional Development from Play',answer:'Play is pleasurable for children and can give them a great sense of achievement. It is also a way in which they can explore and release emotions. They can, for example, be destructive by knocking down a tower of bricks in a safe way and without upsetting anyone. Children also act out things that they have seen adults do and this can help them to understand these things better.'},
        {question:'Social Development from Play',answer:'Play is a great way for children to learn to be with other children. They learn through play to take turns, to recognise when others need help and also how to be part of a group. Some types of play also help children to explore roles.'},
        {question:'Child Initiated Play',answer:(<Fragment><p>This is where the child is calling the shots, and deciding what to play with, how to play with it, and who – if anyone – to play with.</p><p>The child is making lots of decisions and aiding their own development, especially in the following areas:</p><p><span>Confidence:</span> children gain in confidence as choice is a feature of child-led play.</p> <p><span>Concentration:</span> children tend to show high levels of concentration during self-chosen play.</p> <p><span>Creativity & Imagination:</span> children often combine materials and can be very creative and imaginative as they play.</p><p><span>Perseverance:</span> children often stay at a play activity longer or persevere to achieve a goal.</p></Fragment>)},
        {question:'Adult-led Play',answer:(<Fragment><p>This is where the child takes part in activities led by an adult, who decides what skills, concepts or knowledge the child might need to work on.</p><p>This could be where the adult sets up a board game to teach the child how to play a game, or perhaps sets up a new area with a play hospital for some role-play.</p> <p>Adult-led play can broaden a child’s knowledge of different methods of play and materials to play with, or introduce new concepts and ideas for the child to comprehend, and is a great way of expanding a child’s language with new vocabulary as the adults spend time interacting with the children.</p> <p>Adult-led play activities are also used to help children practice skills in areas where they need additional support, such as learning to take turns or holding new tools. Children will take what they experience in adult-led play and use it in their own initiated play, using and practicing their new skills on their own.</p> <p>Children get the most out of adult-led activities when they are specifically designed around the child’s own interests, when they are more likely to become engaged and spend more time taking part.</p> <p>At Blossoms Childcare, we spend time understanding each individual child and their specific interests and needs, then we design adult-led activities suited to the children.</p> <p>This creates various benefits, like helping children to learn new skills, concepts and knowledge that they may not have gained alone; allowing children to learn new games and ways of playing that they may not otherwise have known or chosen to try; giving children opportunities to explore materials and resources they may not have otherwise selected; and providing children with opportunities to develop language, like when practitioners take part in role-play or organise mathematical games.</p></Fragment>)},
        
    ];

    const [current,setCurrent] = React.useState(20);

    return (
        <section class="container-fluid bg-faq">
            <div class="row justify-content-center">
                <div class="col-lg-6 faq-holder">
                    <p class="text-heading fw-bold px-5 text-center mb-5">Play supports development across physical, cognitive, language, emotional and social development.</p>
                {
                    data.map((item,index) => {
                        return (
                            <div class="collapsible mb-3" key={index}>
                                <div class="d-flex justify-content-between">
                                    <h5>{item.question}</h5>
                                    <div class="bordered-circle" onClick={ () => {
                                        if(current !== index){
                                            setCurrent(index) 
                                        }else{
                                            setCurrent(30)
                                        }
                                       
                                    }}>
                                        <i class={(current !== index) ? 'fas fa-chevron-down text-white' : 'fas fa-chevron-up text-white'} ></i>
                                    </div>
                                </div>
                                <p class={(current !== index) ? 'd-none' : 'scale-up-hor-left mt-3'}>{item.answer}</p>
                            </div>
                        )
                    })
                }
                    
                </div>
            </div>
        </section>
    )
}

export default Faq;