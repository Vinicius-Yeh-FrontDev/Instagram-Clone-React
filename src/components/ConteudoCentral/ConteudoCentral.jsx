import './ConteudoCentral.css'
import Itemstories from './Stories/ItemStories'
import Post from './Post/Post'
import iconStory2 from '../../assets/iconStory2.jpg'
import iconStory3 from '../../assets/iconStory3.png'
import iconStory4 from '../../assets/iconStory4.png'
import iconStory5 from '../../assets/iconStory5.png'
import iconStory6 from '../../assets/iconStory6.png'
import iconStory7 from '../../assets/iconStory7.png'
import iconStory8 from '../../assets/iconStory8.png'
import iconStory9 from '../../assets/iconStory9.png'
import post1 from '../../assets/post1.png'
import post2 from '../../assets/post2.png'
import post3 from '../../assets/post3.png'
import post4 from '../../assets/post4.png'
import iconpost2 from '../../assets/blackcat.png'
import iconpost3 from '../../assets/catglasses.png'
import iconpost4 from '../../assets/cat.png'

export default function ConteudoCentral(){
    return(
      <div className='ConteudoCentral'>
        <div className="Stories">
          <Itemstories nameText="wtf_vik_" icon={iconStory2}/>
          <Itemstories nameText="kamaitachi" icon={iconStory3}/>
          <Itemstories nameText="systemof..." icon={iconStory4}/>
          <Itemstories nameText="metallica" icon={iconStory5}/>
          <Itemstories nameText="jp.eiichi..." icon={iconStory6}/>
          <Itemstories nameText="instituto..." icon={iconStory7}/>
          <Itemstories nameText="senactito" icon={iconStory8}/>
          <Itemstories nameText="toninhotor..." icon={iconStory9}/>
        </div>
        <div className="Timeline">
          <Post 
          icon={iconStory3}
          nameUser="kamaitachi "
          time="5 h"
          post={post1}
          miniIcon={iconStory2}
          NameLike='wtf_vik_'
          NamePerfil='kamaitachi'
          Descricao='tô chegando belo horizonte.
          é a última vez que passo por aí com essa turnê do jeito que vocês conhecem, então não vacila.
          amanhã (06/10) no @sesc.palladium
          últimos ingressos no link da bio 😵‍💫😎'
          quantComent='153'
          NamePerfilComent='_mynerva'
          coment='LINDOOO<3'
          NamePerfilComent2='bi3lmoreira'
          coment2='o melhor!'
          />
          <Post 
          icon={iconpost2}
          nameUser="blackcastofday"
          time="1 d"
          post={post2}
          miniIcon={iconStory3}
          NameLike='kamaitachi'
          NamePerfil='blackcatsofday'
          Descricao='The right choice 😌'
          quantComent='43'
          NamePerfilComent='Yehhx'
          coment='Faria o mesmo'
          NamePerfilComent2='wtf_vik_'
          coment2='eterno Pumba'
          />
          <Post 
          icon={iconpost3}
          nameUser="havyanormal"
          time="2 d"
          post={post3}
          miniIcon={iconStory7}
          NameLike=''
          NamePerfil=''
          Descricao=''
          quantComent='23'
          NamePerfilComent='bily'
          coment='sure'
          NamePerfilComent2='andy'
          coment2='for sure hahaha'
          />
          <Post 
          icon={iconpost4}
          nameUser="issoehmim"
          time="4 d"
          post={post4}
          miniIcon={iconStory2}
          NameLike='wtf_vik_'
          NamePerfil='issoehmim'
          Descricao='😺'
          quantComent='27'
          NamePerfilComent='Vinicius_Yeh'
          coment='sempre'
          NamePerfilComent2='wtf_vik'
          coment2='sempre'
          />
        </div>
      </div>
    )
}