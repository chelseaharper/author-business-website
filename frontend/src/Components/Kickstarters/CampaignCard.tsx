import './Kickstarters.css';

function CampaignCard({ campaign }) {
  return (
    <div className="campaign-card">
      <div className="campaign-image">
        <img src={campaign.image} alt={`Cover for ${campaign.title}`} />
      </div>
      <div className="campaign-text">
        <h3>{campaign.title}</h3>
        <p>{campaign.description}</p>
        <p className={`campaign-status ${campaign.status}`}>
          {campaign.status === 'active' && 'Active'}
          {campaign.status === 'funded' && 'Funded'}
          {campaign.status === 'failed' && 'Failed'}
        </p>
        <a href={campaign.url} target="_blank" rel="noopener noreferrer" className="campaign-link">
          View Campaign
        </a>
      </div>
    </div>
  );
}

export default CampaignCard;