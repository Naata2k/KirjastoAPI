const KirjastoKortti = ({ kirjasto }) => {

    const { name, street, zipcode, description, coverPhoto, address, slug } = kirjasto;
    const { city } = address || {}; 
  
    const kuvaUrl = coverPhoto && coverPhoto.medium && coverPhoto.medium.url;
  
    return (
      <div className="kirjasto-kortti">
        <h2>{name}</h2>
        <p>{street}, {zipcode}</p>
        <p>{description}</p>
        <p>{city}</p>
        <p>{slug}</p>
        {kuvaUrl && <img src={kuvaUrl} alt={name} />}
      </div>
    );
};

export default KirjastoKortti;