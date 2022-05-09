import React, { useContext, useEffect } from "react";
import ProfileContext from "../../contexts/ProfileContext";
import GivenOffers from "./GivenOffers";
import MyOffers from "./MyOffers";

function ProfileDetail() {
  const { currentCategory, setCurrentCategory, searchParams, setSearchParams } =
    useContext(ProfileContext);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const categoryName = queryParams.get("show");
    setCurrentCategory(categoryName ? categoryName : "teklif-aldiklarim");
  }, [searchParams]);

  return (
    <div className="products">
      <div className="profileCategories">
        <div className="categoryCard">
          <div
            onClick={() => setSearchParams({ show: "teklif-aldiklarim" })}
            className={`categoryName ${
              currentCategory === "teklif-aldiklarim" && "activeCategory"
            }`}
          >
            Teklif Aldıklarım
          </div>
          <div
            onClick={() => setSearchParams({ show: "teklif-verdiklerim" })}
            className={`categoryName ${
              currentCategory === "teklif-verdiklerim" && "activeCategory"
            }`}
          >
            Teklif Verdiklerim
          </div>
        </div>
      </div>

      <div className="myOfferCards">
        {currentCategory === "teklif-aldiklarim" && <MyOffers />}
        {currentCategory === "teklif-verdiklerim" && <GivenOffers />}
      </div>
    </div>
  );
}

export default ProfileDetail;
