<div className="show-container">
  {/* Shop Image and Details */}
  <div className="image-cover">
    <img className="shop-pic" src={photo} alt="shop picture" />
    <div className="shop-image-overlay">
      <h1 className="shop-name">{name}</h1>
      <div className="img-rating">
        {/* <ul className="rating-list"> */}
        {/* <li className="rating-stars"> */}
        <RatingStars rating={rating} setRating={setRating} readOnly={true} />
        <p className="shop-rating">{shop.rating}</p>

        {/* </li> */}
        {/* <li className="shop-rating"></li> */}
        {/* </ul> */}
      </div>
      <div className="total-review">{total_review} reviews</div>

      <div className="shop-content">
        <i class="fa-solid fa-circle-check"></i>
        <span className="check-text"> Claimed</span>
        <span className="check-text1"> • $$ • Ice Cream, Milkshake</span>
        <p className="hours">
          <span style={{ color: "rgba(4, 197, 133, 1)" }}>Open </span>
          {openingTime}:00 AM - {closingTime}:00 PM
        </p>
      </div>
    </div>
  </div>
  <div className="review-part">{reviewButton}</div>
  {/* Middle Section */}
  <div className="middle-page">
    <div className="middle-container">
      {/* Left Section */}
      <div className="show-split show-left">
        <div className="map-show-hour">
          <div className="biz-header">
            <div className="item">
              <h1>Location & Hours</h1>
            </div>
          </div>
          <hr className="show-hr"></hr>
          {/* <div className="address-section"> */}

          <div className="address-map">
            <div className="middle-section">
              <div className="map-section">
                <MeltMapWrapper className="map-style" />
              </div>
              <div className="address-section">
                <p>{address}</p>
                <p>
                  {city}, {zipCode}
                </p>
                <p>{state}</p>
              </div>
            </div>
            <div className="day-hours">
              <p>
                Mon {openingTime}:00 AM - {closingTime}:00 PM
              </p>
              <p>
                Tue {openingTime}:00 AM - {closingTime}:00 PM
              </p>
              <p>
                Wed {openingTime}:00 AM - {closingTime}:00 PM
              </p>
              <p>
                Thu {openingTime}:00 AM - {closingTime}:00 PM
              </p>
              <p>
                Fri {openingTime}:00 AM - {closingTime}:00 PM
              </p>
              <p>
                Sat {openingTime}:00 AM - {closingTime}:00 PM
              </p>
              <p>
                Sun {openingTime}:00 AM - {closingTime}:00 PM
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="amenities">
          <h1>Highlights from the Business</h1>
          <Highlights />
        </div>
        <div className="about-biz">
          <AboutBiz />
        </div>
      </div>

      {/* Right Section */}
      <div className="show-split show-right">
        <div className="show-card">
          <ul className="card-content">
            <li className="card-link">
              <a href={link} target="_blank">
                {link}
              </a>
            </li>
            <hr className="card-hr" />
            <li
              className="address-title"
              style={{ color: "rgba(2, 122, 151, 1)" }}
            >
              Address:
            </li>
            <li className="card-street">{address}</li>
            <li className="card-address">
              {city}, {state}, {zipCode}
            </li>
            <hr className="card-hr" />
            <li className="card-phoneNumber">{phoneNumber}</li>
          </ul>
        </div>
      </div>
    </div>
    <ReviewIndex />
  </div>
</div>;
