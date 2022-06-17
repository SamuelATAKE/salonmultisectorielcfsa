import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import H4 from "@material-tailwind/react/Heading4";
import H6 from "@material-tailwind/react/Heading6";
import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from "@material-tailwind/react/Paragraph";
import StatusCard from "components/landing/StatusCard";
import Teamwork from "assets/img/teamwork.jpeg";

export default function WorkingSection() {
  return (
    <section className="pb-20 bg-gray-100 -mt-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap relative z-50">
          <StatusCard color="red" icon="stars" title="Période">
            Du 10 au 18 Septembre 2022
          </StatusCard>
          <StatusCard color="lightBlue" icon="autorenew" title="Lieu">
            Salle .... de l'Hôtel ......
          </StatusCard>
          <StatusCard color="teal" icon="ellipsish" title="Sont attendus">
            Environ 1 000 jeunes comoriens réunis autour de la thématique sur la
            sécurité alimentaire <br />
            200 acteurs répartis dans le domaine du genre, agroalimentaire,
            santé et nutrition, connectés et formés
          </StatusCard>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="people" size="3xl" />
            </div>
            <H4 color="gray">Résumé sur le Salon</H4>
            <LeadText color="blueGray">
              Le salon multisectoriel sur le capital féminin et la sécurité
              alimentaire aux Comores est une initiative de{" "}
              <span>l’Association Développons-Nous (ADN)</span>. Une association
              mettant en avant le développement de la femme aux Comores et en
              Afrique. Elle œuvre principalement dans la santé, la nutrition, le
              secteur entrepreneurial agricole et dans l’agroalimentaire.
            </LeadText>
            <LeadText color="blueGray">
              Face à la menace de la crise alimentaire entrainée par les
              catastrophes climatiques, à laquelle s’est ajoutée la crise
              sanitaire covid-19 et la crise en Ukraine qui ont un impact sur
              l’économie de la plupart des pays du monde entier et qui conduit
              principalement, vers une crise alimentaire généralisée, l’ADN
              initie ce salon aux Comores. Ceci rejoignant les objectifs du Plan
              Comores Emergent (PCE) ultime guide stratégique et de vision du
              pays sur la période 2020-2030 qui met un accent particulier au
              socle 4 sur une agriculture modernisée pour l’atteinte de la
              sécurité alimentaire.
            </LeadText>
            <LeadText color="blueGray">
              Conscient du rôle primordial de la femme aux Comores ; ce salon a
              pour thème :{" "}
              <span>
                « Le Capital féminin et l’agriculture pour l’atteinte de la
                sécurité alimentaire aux Comores »
              </span>{" "}
              et est prévu pour la période du{" "}
              <span>10 au 18 septembre 2022</span>.
            </LeadText>
            <a
              href="#pablo"
              className="font-medium text-light-blue-500 mt-2 inline-block"
            >
              ...
            </a>
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Card>
              <CardImage alt="Card Image" src={Teamwork} />
              <CardBody>
                <H6 color="gray">
                  Pour l’atteinte des objectifs, il est prévu :
                </H6>
                <Paragraph color="blueGray">
                  <Icon name="stars" size="xl" color="blue" /> Des formations
                  sur leadership, le savoir-faire entrepreneurial, Agrobusiness
                  et agroalimentaire,
                </Paragraph>
                <Paragraph color="blueGray">Un concours culinaire,</Paragraph>
                <Paragraph color="blueGray">
                  <Icon name="stars" size="xl" color="blue" />
                  Une foire d’exposition et de valorisation des produits
                  agroalimentaires Comoriens,
                </Paragraph>
                <Paragraph color="blueGray">
                  <Icon name="stars" size="xl" color="blue" />
                  Des panels sur la sécurité alimentaire,
                </Paragraph>
                <Paragraph color="blueGray">
                  <Icon name="stars" size="xl" color="blue" />
                  Réseautage multisectoriel entre les acteurs reliés à
                  l’atteinte de la sécurité alimentaire aux Comores.
                </Paragraph>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
