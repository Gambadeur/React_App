import React, { Component } from 'react';
import './article.css';

class article extends Component {
  render() {
    return (
    <div className="article">
        <div className="leftContainer"></div>
       <div className="rightContainer">
           <div className="articlette">
               <div className="articletteCentre">
                   <h1>1982</h1>
                   <h2>Les baleines ont leur moratoire</h2>
                   <h3>Malgré un moratoire et une interdiction du commerce international des produits baleiniers, plus de 1.000 baleines sont tuées chaque année </h3>
                   <div className="icon"></div>
                   <p>Au cours de l'année 1961, date de création du WWF International, plus de 66.000 baleines ont été tuées. Pour faire face à cette extinction organisée, le WWF appelle à la création de sanctuaires baleiniers et d'un moratoire sur la chasse baleinière commerciale. Il faudra attendre 1979 pour obtenir une première victoire: la création du premier sanctuaire baleinier qui couvre tout l'Océan Indien, ainsi qu'un moratoire - une suspension - sur l'utilisation des navires usines pour la chasse. </p>
               </div>
           </div>
       </div>
      </div>
    );
  }
}

export default article;