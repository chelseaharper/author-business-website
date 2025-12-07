import './Kickstarters.css';
import CollapsibleSection from './CollapsibleSection';
import CampaignCard from './CampaignCard';


const kickstarters = [
    {
        id: 'wake-special',
        title: 'Wake of the Phoenix: Limited Edition Hardcover',
        description: `Limited edition hardcover of the first title 
        in the Artifice of Power Saga, including character illustrations,
        additional chapters, and foil jacket. This edition features the final
        release of the original cover of Wake of the Phoenix.`,
        image: '',
        url: 'https://www.kickstarter.com/projects/crharper/wake-of-the-phoenix-limited-edition-hardcover',
        status: 'funded' //'active', 'funded', 'failed', 'upcoming'

    },
    {
        id: 'rise-release',
        title: 'Rise of the Moirai',
        description: `Continue the story of Arkaen, Kilasha, Niamsha, and Sayli with Rise of the Moirai.`,
        image: '',
        url: 'https://www.kickstarter.com/projects/crharper/wake-of-the-phoenix-limited-edition-hardcover',
        status: 'upcoming' //'active', 'funded', 'failed', 'upcoming'

    },
    {
        id: 'romantasy-special',
        title: 'On Cursed Wings: Early Special Edition',
        description: `Annelise was always just a country girl, preferring to stay home in the sleepy
        village working in her father's inn. Not like her sisters and brother, who clamored to join
        their mother at the capital serving the queen. And when their mother was summoned to the queen's
        service permanently, Annelise chose to stay behind with their father again. Her sisters think
        she stayed for the view... of the daring woodsman and her childhood friend, Bastion. Then, her
        father is caught in a freak change of the seasons, falling into a deadly dream. Only Annelise
        knows anough of the local lore to brave the grounds of the forgotten castle and finds herbs that
        can save him. Or so she thinks, until she arrives and finds Bastion creeping into the castle
        and watches as the monster who lives there drags him away. Now she must choose. Try to save her
        father, who lies gravely ill, or save the boy next door who has always held her heart.`,
        image: '',
        url: 'https://www.kickstarter.com/projects/crharper/wake-of-the-phoenix-limited-edition-hardcover',
        status: 'active' //'active', 'funded', 'failed', 'upcoming'

    },
    {
        id: 'autumns-realm',
        title: 'Autumns Realm video game',
        description: `This rpg was intended to be a fund project and really blew out of proportion!`,
        image: '',
        url: 'https://www.kickstarter.com/projects/crharper/wake-of-the-phoenix-limited-edition-hardcover',
        status: 'failed' //'active', 'funded', 'failed'

    }
]

const activeCampaigns = kickstarters.filter(c => c.status === 'active');
const fundedCampaigns = kickstarters.filter(c => c.status === 'funded');
const failedCampaigns = kickstarters.filter(c => c.status === 'failed');
const upcomingCampaigns = kickstarters.filter(c => c.status === 'upcoming');


function Kickstarters()  {
    return (
        <div>
            <div className="backer-container">
                <h1>
                    Kickstarter Backer's Wall of Honor
                </h1>
                <p>
                    Special thank you to each of the below people for their early support of the
                    <em>Artifice of Power Saga</em>. The re-release of <em>Wake of the Phoenix</em>
                    would not be as exceptional a product without their support, and readers are the
                    most important part of any book release.
                </p>
                <ul>
                    <li>Dave Smith</li>
                    <li>Don Harper</li>
                    <li>Geoff Zahn</li>
                    <li>Chris Smith</li>
                    <li>Jamie Williams</li>
                    <li>Chad Barnard</li>
                    <li>Leslie Parsons</li>
                    <li>Katherine Leslie</li>
                    <li>Veronica Rodriguez</li>
                    <li>Keisha Marie</li>
                    <li>R Stewart</li>
                    <li>Jessica Hoppe</li>
                    <li>Florentina</li>
                    <li>Morgan</li>
                    <li>Jerdarius Collier</li>
                </ul>
            </div>
                <CollapsibleSection title="Active Campaigns">
                    {activeCampaigns.map(c => (<CampaignCard key={c.id} campaign={c} />))}
                </CollapsibleSection>
                <CollapsibleSection title="Upcoming Campaigns">
                    {upcomingCampaigns.map(c => (<CampaignCard key={c.id} campaign={c} />))}
                </CollapsibleSection>
                <CollapsibleSection title="Funded Campaigns">
                    {fundedCampaigns.map(c => (<CampaignCard key={c.id} campaign={c} />))}
                </CollapsibleSection>
                <CollapsibleSection title="Failed Campaigns">
                    {failedCampaigns.map(c => (<CampaignCard key={c.id} campaign={c} />))}
                </CollapsibleSection>
            
        </div>
    )
}

export default Kickstarters;