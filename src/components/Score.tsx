import { Badge } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import { GameDetailsProps } from "../hooks/useSelectGameDetails";

export default function Score(game?: Game | GameDetailsProps){
    if(game){
        const score = game.metacritic ? game.metacritic : 0; 
        const color = score > 80 ? 'green' : score > 70 ? 'blue' : score > 50 ? 'purple' :  'red'  
        return (
            <Badge h={'30px'} colorPalette={color}>{score}</Badge>
        )
    }else{
        throw new Error('Invalid Game Score')
    }
}