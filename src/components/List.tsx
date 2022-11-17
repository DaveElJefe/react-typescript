import {Suscriptor} from '../types';

interface Props{
    subs: Array<Suscriptor>
}

export default function List ({subs}: Props){
    return(
        <ul>
        {
          subs.map(sub =>{
            return(
              <li key={sub.nickname}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nickname}`} />
                <h4>{sub.nickname} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0,100)}</p>
              </li>
            )
          })
        }
      </ul>
    )
}