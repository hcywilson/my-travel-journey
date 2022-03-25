import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
const styles = {
    icon: {
        fontSize: "smaller",
        verticalAlign: "middle",
        color: "#F55A5A",
    }
}

export default function ContentBox({ title, location, googleMapsUrl,
    startDate, endDate, description, imageUrl }) {
    return (
        <div key={title} className="content-box">
            <img className="content-box--image" src={imageUrl} alt={title} />
            <div className="content-box--content">
                <div className="content-location">
                    <LocationOnIcon style={styles.icon} />
                    <span className="location">{location.toUpperCase()}</span>
                    <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="google-map-link">View on Google Maps</a>
                </div>
                <h1 className="title">{title}</h1>
                <p className="date">{`${startDate} - ${endDate}`}</p>
                <p className="description">{description}</p>
            </div>

        </div>)
}
