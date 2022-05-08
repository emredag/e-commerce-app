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
    setCurrentCategory(categoryName ? categoryName : "teklif-aldıklarım");
  }, [searchParams]);

  return (
    <div className="products">
      <div className="profileCategories">
        <div className="categoryCard">
          <div
            onClick={() => setSearchParams({ show: "teklif-aldıklarım" })}
            className={`categoryName ${
              currentCategory === "teklif-aldıklarım" && "activeCategory"
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
        {currentCategory === "teklif-aldıklarım" && <MyOffers />}
        {currentCategory === "teklif-verdiklerim" && <GivenOffers />}
      </div>
    </div>
  );
}

export default ProfileDetail;
