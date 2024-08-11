import {IoLogoLinkedin} from 'react-icons/io5'
import {AiFillInstagram} from 'react-icons/ai'
import './index.css'

export default function Footer() {
  return (
    <>
      <div className="footer-main-container">
        <div className="footer-container">
          <div>
            <h1 className="foot-head">Be the first to know</h1>
            <p>Sign up for updates from mettā muse.</p>
            <div className="search-con">
              <input
                className="search-input"
                type="search"
                placeholder="Enter your e-mail..."
              />
              <button className="btn" type="button">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div>
            <h1>CONTACT US</h1>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <div className="usd-con">
              <img
                className="usd-img"
                src="https://www.shutterstock.com/shutterstock/photos/2480140689/display_1500/stock-vector-usa-waving-flag-pattern-background-realistic-national-flag-design-abstract-vector-template-2480140689.jpg"
                alt="USD"
              />
              <h1> .USD</h1>
            </div>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        <hr />
        <div className="last-container">
          <div>
            <h1>mettā muse</h1>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>
          <div>
            <h1>QUICK LINKS</h1>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <h1>Follow Us</h1>
            <div>
              <AiFillInstagram className="icon-l" />
              <IoLogoLinkedin className="icon-l" />
            </div>

            <h1>mettā muse Accepts</h1>
            <div>
              <img
                className="img-pay"
                src="data:image/png;base64,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"
                alt="google-pay"
              />
              <img
                className="img-pay"
                src="data:image/png;base64,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"
                alt="master-card"
              />
              <img
                className="img-pay"
                src="data:image/png;base64,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"
                alt="paypal"
              />
              <img
                className="img-pay"
                src="https://logowik.com/content/uploads/images/amex-card1708.jpg"
                alt="amex"
              />
              <img
                className="img-pay"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5rubvHcXXKByVLBNHT-kKouXvc2cF1YW_Q&s"
                alt="apple"
              />
              <img
                className="img-pay"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8hEGAdzqAAAFAAAE8AAFUAAFMAzJwAypgAAFYYAFzJx9QIAFgRAFoPzZ4AAE1fV4UcBl480qktHWZv27r6+fuopbrj4ukeC1+069kbBV4AAEZ/epud5c7q+fTU091YUIBkXoitqr7X9OrI8OP5/vzx8PR73b+Vkayo6NNIP3aLhqQ2K2vNy9fe3eWqp7y4tse369tm2beP4shT1rAzJ2rf9u89M28AADsAAEFzbZNzbpNYUYAuHmZPRnqPi6f6uwWnAAAGQ0lEQVR4nO2aa1viOhSFqb2XFkSBlhmQ+20URNThzE3//786tNlNk7aMzLEF5zzr/QQh1Sx2stdOQqUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgYG7Gk8lkfHPuYZTEtLM1LTPEMred6bmHUzg3c8usXcTUTKv59UDPFmO2p3XSIb6Pvb4LmZrVzMbxsypjvyzWZxjtnzMWwpdgmg/pjoaSwnG1wV+gcWnlCdxjPaZ6ZhSGIrXuWUb9B/SsfH1hGJty1zyFiuLuPvaCXAoCa2EqrQkRNedS33yFinP9kSWOE4GmdTHvLZePT0LasZZi5wMKFe/LuYZ/BDzJ1Kx5bBDTnsk1WqL/k0LP1nXd2OM2SKK+OMfYj2IeSzGvpFKmGYe2diW0MoXe7WZTXfXXfv/+TieJ2izzp2e+n2nce2hopOlm8tgiBKW5iYWkFpywPK1J0qiygK2SlrZGYb2Vnp61B6pqGGp9t/BZyyq43yv5J7LR+qXU2Wc2+21ToDBOHMKMQEGiEERSWBW6VUmiLg55WHcd1tzw6t/3IfMvVX20/+SFNdd98T91vbAtCIqVRljxFM35rEnqrTFvylFYufXSja91R0pDRvtWcxQ7VFhls9oTLbTF5r7bLlhbxOTiKuIidztBOaiW+H6eQhqgx3PNFztjmOGXECmsKEHUogprrs36a2dwnCULYu2Ct+QprAyjiDlDenvn5TsKU0hyxIBdR6K9H6XryTKlOWzxEjxXYduNFtyOvRskAhufsgopHQcKf7zKWtR+CQo2g0vGz9f8Dls2T02+EHMVjqKwBM/Rm3ZcFHiGvvviGl5aIS1bg/+NQTQFPu0Kl7dnYTgM+3t+hx6bpskeI1fhPYvhXfi6xXoojnobbTnWXS2IF+N91NtnudcZ0NP0nvQXzMKNv+8Da+CBFPLKLVchS/bOz/D1K/uTzh039b4dSAopZormi09LZlMcr28pnJDCXtyQq9BjmSIyADd63XgWPvZVWSGtOzIMCnqqYCiKJIYHdniTY2K4YRZnhxXJypDiwxjpkkLKnWQYLE2lniiMhd1guAcULo9YhzMWQqUezkv2nXHjIJgHcoWSYQRBMsWL5965jvj160Aubb6dS9fXbFk5UanJrNFOFZhMN7dAmpiRYVCNY8jz/nSY+X5o03ha/mao0f5JjarxXeSARurkhslITL6bGAarU4PGKdTk8HCgplFsVVMNfb95sOMClIWQ5qORWlRrQ1YYG8ZLZa0p8keFM942I7a5delFLb3vIIUZAoO5wy+mMFWe9FMKuWHMKJollqRTqxaRu7d4zO4ttAMK66SJTbq0e7OiR1BIhuEMmcBSS9Lm4f3hA1WlwiQ9oLChxYlCNP8EFjJxKtIOg+Z4KSVpDN/jZ45GO3z330kacxW6Cl93G9oISammr2YWW9sVni+nJOXM44Mocysd4s/5EZw4gTMKA8fWBKuZadkxtyhgosKWuKDT5lI0/KzNNB/jfDNdJmemwirkCl2D7i0097ItZQlmiIqXeP7sjuailDC7wiaynJI0YSKel149LjvReSkXaEqzl5L7yJ8xMjlwXWej9na0tkbcUCSFfjIbSipJBaRD/cyZ91bqy8YlnrWl6dIK+2Q8dxevQz3eWaRNb8CPckoqSUUef3Nv8SR3fVth5ToeesNzPfFESlZYjXfKfKNYJgevZqzUxUys8HfZfaY3lFxShQvln/RWrCQmZvp+NDJC+c4i5AiFFV+K3EGFZBinKkmn28wVYs16ypZyTGG6KkvRejECUVqQdYsK31WUWJKmGIsXTuE9/tMkp9dRCvfG7+g8jp7x/BzkaLmMa9PCJLzJTe/Jot9iWE+9/F+cfDP0PZ/frrI2PzXDtm3dMH70K8PwpV2XrqfILk5+Svp10uk8TA79CmNfgPVXq2p1c9T33t+MRpuofFuNQuSnyPLVv+BHAP8NKtucj3yz+j7oEEwvuSQ9I+z4KvDOPY7SoBNI9+Pejb+Xl9NbxWmJj6KGb3f9S1nU9chXy99VnAt/b6rV6up/O0cBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBc/AsTY2heJfgUnQAAAABJRU5ErkJggg=="
                alt="o-pay"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
