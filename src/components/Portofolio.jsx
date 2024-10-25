/* eslint-disable no-unused-vars */
import React from 'react'
import Etude from './Etude'

const Portofolio = () => {
  return (
    <section className="pt-20 lg:pt-32" id="home">
        <div className="container section items-center lg:grid lg:grid-cols-2 lg:gap-10">
            <div className="bg-gray-300 rounded-lg p-1">
                <div className="bg-white h-full rounded-lg p-5">
                    <div className="text-2xl font-bold">Etudes et Formations</div>
                    <Etude etude={"Ecole Primaire"} formation={"Etude primaire"} annee={"2008-2009"}/>
                    <Etude etude={"Ecole Primaire Virunga Quartier"} formation={"Etude primaire"} annee={"2009-2014"}/>
                    <Etude etude={"Ecole du Cinquantenaire"} formation={"Electronique"} annee={"2014-2020"}/>
                    <Etude etude={"Universite Libre des Pays des Grands-Lacs"} formation={"Genie Informatique"} annee={"2021 à nos jours"}/>
                    <Etude etude={"StarTech Emisha"} formation={"Initiation à l'intelligence Artficielle"} annee={2020}/>
                    <Etude etude={"Institut Français Goma"} formation={"Marketing digital"} annee={2022}/>
                    <Etude etude={"Institut Français Goma"} formation={"JavaScript"} annee={2022}/>
                    <Etude etude={"Institut Français Goma"} formation={"Blender (3D)"} annee={2022}/>
                </div>
            </div>
            <div className="">
                <div className="bg-gray-300 rounded-lg mb-5 p-1">
                    <div className="bg-white h-full rounded-lg p-5 gap-10">
                        <div className="text-2xl font-bold mb-4">Frameworks et Languages</div>
                        <div className="w-full flex flex-row justify-between mb-4">
                            <img src="/images/javascript.svg" alt="JavaScript" className='w-20 h-20'/>
                            <img src="/images/go.svg" alt="Golang" className='w-20 h-20'/>
                            <img src="/images/react.svg" alt="React" className='w-20 h-20'/>
                        </div>
                        <div className="w-full flex flex-row justify-between mt-4">
                            <img src="/images/next.svg" alt="next" className='w-20 h-20'/>
                            <img src="/images/expo.svg" alt="expo" className='w-20 h-20'/>
                            <img src="/images/postgresql.svg" alt="postgresql" className='w-20 h-20'/>
                        </div>
                    </div>
                </div>
                <div className="h-1/2 bg-gray-300 rounded-lg mt-5 p-1">
                    <div className="bg-white h-full rounded-lg p-5">
                        <div className="text-2xl font-bold pb-4">Experiences Professionnel</div>
                        <div className="text-justify">
                            Nous avons deja eu a travailler sur quelques projets personnel et professionnel dont certains sont disponible sur notre github. Nous avons deja eu aussi a faire quelques stages surtout dans le domaine academiques. Et nous avons eu le privilege d'etre quelques fois formateur.
                        </div>
                        <div className="flex flex-row justify-between items-end">
                            <p>Pour plus</p>
                            <button className="bg-black rounded-lg p-2 text-white">Telecharger CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portofolio