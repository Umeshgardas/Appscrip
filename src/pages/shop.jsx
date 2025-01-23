import { useState } from "react";
import "../assests/styles/pages/shop.css";
import Icons from "@/common/constants/Icons";
import Images from "@/common/constants/Images";
import Image from "next/image";
import { Helmet } from "react-helmet";

const Shop = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [expanded, setExpanded] = useState(null);
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const filteroption = [
    {
      id: 1,
      name: "ideal for",
      options: [
        {
          id: 1,
          name: "men",
        },
        {
          id: 2,
          name: "Women",
        },
        {
          id: 3,
          name: "Baby and Kids",
        },
      ],
    },
    {
      id: 2,
      name: "occasion",
      options: [
        {
          id: 1,
          name: "men",
        },
        {
          id: 2,
          name: "Women",
        },
        {
          id: 3,
          name: "Baby & Kids",
        },
      ],
    },
    {
      id: 3,
      name: "work",
      options: [
        {
          id: 1,
          name: "men",
        },
        {
          id: 2,
          name: "Women",
        },
        {
          id: 3,
          name: "Baby & Kids",
        },
      ],
    },
    {
      id: 4,
      name: "fabric",
      options: [
        {
          id: 1,
          name: "men",
        },
        {
          id: 2,
          name: "Women",
        },
        {
          id: 3,
          name: "Baby & Kids",
        },
      ],
    },
    {
      id: 5,
      name: "segment",
      options: [
        {
          id: 1,
          name: "men",
        },
        {
          id: 2,
          name: "Women",
        },
        {
          id: 3,
          name: "Baby & Kids",
        },
      ],
    },
    {
      id: 6,
      name: "suitable for",
      options: [
        {
          id: 1,
          name: "men",
        },
        {
          id: 2,
          name: "Women",
        },
        {
          id: 3,
          name: "Baby & Kids",
        },
      ],
    },
    {
      id: 7,
      name: "raw materials",
      options: [
        {
          id: 1,
          name: "men",
        },
        {
          id: 2,
          name: "Women",
        },
        {
          id: 3,
          name: "Baby & Kids",
        },
      ],
    },
    {
      id: 8,
      name: "Pattern",
      options: [
        {
          id: 1,
          name: "men",
        },
        {
          id: 2,
          name: "Women",
        },
        {
          id: 3,
          name: "Baby & Kids",
        },
      ],
    },
  ];

  const products = [
    {
      id: 1,
      name: "PPXOC Milkyway dress in pressed flowers",
      description: "Sign in or Create an account to see pricing",
      image: Images.GrayBag,
    },
    {
      id: 2,
      name: "PPXOC Milkyway dress in pressed flowers",
      description: "Sign in or Create an account to see pricing",
      image: Images.YellowHorse,
    },
    {
      id: 3,
      name: "PPXOC Milkyway dress in pressed flowers",
      description: "Sign in or Create an account to see pricing",
      image: Images.Belt,
    },
    {
      id: 4,
      name: "PPXOC Milkyway dress in pressed flowers",
      description: "Sign in or Create an account to see pricing",
      image: Images.WhiteCap,
    },
    {
      id: 5,
      name: "PPXOC Milkyway dress in pressed flowers",
      description: "Sign in or Create an account to see pricing",
      image: Images.LightBrownBag,
    },

    {
      id: 6,
      name: "PPXOC Milkyway dress in pressed flowers",
      description: "Sign in or Create an account to see pricing",
      image: Images.WhiteBlueBag,
    },
    {
      id: 7,
      name: "PPXOC Milkyway dress in pressed flowers",
      description: "Sign in or Create an account to see pricing",
      image: Images.DarkgrayBag,
    },
    {
      id: 8,
      name: "PPXOC Milkyway dress in pressed flowers",
      description: "Sign in or Create an account to see pricing",
      image: Images.LightyBag,
    },
    {
      id: 9,
      name: "PPXOC Milkyway dress in pressed flowers",
      description: "Sign in or Create an account to see pricing",
      image: Images.GrayBag,
    },
  ];

  const handleToggle = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLike = (id) => {
    setLikedProducts((prevLikes) =>
      prevLikes.includes(id)
        ? prevLikes.filter((productId) => productId !== id)
        : [...prevLikes, id]
    );
  };

  return (
    <div className="shop">
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="shopping" />
      </Helmet>
      <div className="shop_hero_section">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <div className="shop_product_section">
        <div className="shop_product_header">
          <div className="shop_product_header_left">
            <span>3425 Items</span>
            <a onClick={toggleFilterVisibility}>
              {isFilterVisible ? (
                <div className="show_hide_filter">
                  <Image
                    style={{ transform: "rotate(90deg)" }}
                    src={Icons.ArrowDownIcon}
                    alt="leftarrow"
                  />
                  HIDE FILTER
                </div>
              ) : (
                <div className="show_hide_filter">
                  <Image
                    style={{ transform: "rotate(270deg)" }}
                    src={Icons.ArrowDownIcon}
                    alt="rightarrow"
                  />
                  SHOW FILTER
                </div>
              )}
            </a>
          </div>
          <div className="shop_product_header_dropdown">
            <button className="dropdown-toggle" onClick={handleToggleDropdown}>
              RECOMMENDED{" "}
              {dropdownOpen ? (
                <Image
                  style={{ transform: "rotate(180deg)" }}
                  src={Icons.ArrowDownIcon}
                  alt="uparrow"
                />
              ) : (
                <Image src={Icons.ArrowDownIcon} alt="downarrow" />
              )}
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>Newest First</li>
                <li>Popular</li>
                <li>Price: High to Low</li>
                <li>Price: Low to High</li>
              </ul>
            )}
          </div>
        </div>
        <div className="shop_product_container">
          {isFilterVisible && (
            <div className="shop_product_container_left">
              {/* Add your filter content here */}
              <div className="customizable">
                <input type="checkbox" name="" id="" />
                <h5 className="customizable_title uppercase">customizble</h5>
              </div>
              {filteroption.map((option) => (
                <div key={option.id} className="filter_section">
                  <div
                    className="filter_options"
                    onClick={() => handleToggle(option.id)}
                  >
                    <div className="filter_options_left">
                      <h5 className="uppercase">{option.name}</h5>
                      <p>All</p>
                    </div>
                    <div className="filter_options_right">
                      {expanded === option.id ? (
                        <Image
                          style={{ transform: "rotate(180deg)" }}
                          src={Icons.ArrowDownIcon}
                          alt="uparrow"
                        />
                      ) : (
                        <Image src={Icons.ArrowDownIcon} alt="downarrow" />
                      )}
                    </div>
                  </div>
                  {expanded === option.id && (
                    <div className="filter_content">
                      {option.options.map((opt) => (
                        <div className="sub_choice">
                          <input type="checkbox" name="" id="" />
                          <p key={opt.id}>{opt.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          <div
            className={`shop_product_container_right ${
              isFilterVisible ? "with-filter" : "no-filter"
            }`}
          >
            {/* Add your product content here */}
            <div
              className={`grid-container ${
                isFilterVisible ? "with-filter" : ""
              }`}
            >
              {products.map((product) => (
                <div className="grid-item" key={product.id}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="product_img"
                  />
                  <h5 className="uppercase">{product.name}</h5>
                  <div className="product_content">
                    <p className="gray_text">{product.description}</p>
                    <Image
                      className="heart-icon"
                      src={
                        likedProducts.includes(product.id)
                          ? Icons.LikedHeartIcon
                          : Icons.HeartIcon
                      }
                      onClick={() => handleLike(product.id)}
                      alt="heart icon"
                      height="10px"
                      width="10px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
