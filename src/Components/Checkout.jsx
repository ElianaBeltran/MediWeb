import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import BannerBackground from "../Assets/home-banner-background.png";


const PayPalButton = ({ total }) => {
  useEffect(() => {
    const convertirDolar = () => (total / 60.0).toFixed(2);

    // Verificar si Paypal ya ha cargado antes de crear el botón
    if (window.paypal && !document.getElementById("paypal-button-container").hasChildNodes()) {
      window.paypal.Buttons({
        style: {
          shape: "pill",
          layout: "vertical",
          color: "blue",
          label: "checkout",
        },
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: { value: convertirDolar() },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(() => {
            alert("Pago aplicado correctamente!");
          });
        },
        onCancel: function () {
          alert("Pago cancelado");
        },
      }).render("#paypal-button-container");
    }
  }, [total]); // El efecto solo se ejecutará si 'total' cambia.

  return <div id="paypal-button-container"></div>;
};


  const OrderDetails = ({ serviceCost, tax, total }) => {
    return (
      <div className="order-details">
        <h4 className="primary-text">Detalle de consulta</h4>
        <div className="order-table">
          <thead>
            <tr>
              <th className="secondary-text">Consulta</th>
              <th className="secondary-text">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="secondary-text">Coste de servicio</td>
              <td className="secondary-text">RD$ {serviceCost}.00</td>
            </tr>
            <tr>
              <td className="secondary-text">Impuesto</td>
              <td className="secondary-text">RD$ {tax}.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="order-total">
              <th className="secondary-text">Total</th>
              <th className="secondary-text">RD$ {total}.00</th>
            </tr>
          </tfoot>
        </div>
      </div>
    );
  };
  
  const Checkout = () => {
    const serviceCost = 500.0;
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      const calculateTax = () => serviceCost * 0.18;
      const calculateTotal = () => serviceCost + calculateTax();
  
      setTax(calculateTax());
      setTotal(calculateTotal());
    }, [serviceCost]);
  
    return (
        <div className="home-container">
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt=""/>
                </div>
                
            </div>
      <div className="box-info">
      <div className="box-info-container">
        <header className="header-section header-normal">
          <img src={Logo} alt="Logo" className="logo" />
        </header>
  
        <div className="page-area cart-page spad">
          <form className="checkout-form center">
            <div className="row card-div">
              <div className="col-lg-6">
                <div className="order-card">
                  <OrderDetails serviceCost={serviceCost} tax={tax} total={total} />
                  <PayPalButton total={total} />
                </div>
                <div className="back-home-container">
                    <Link to="/userHome" className="back-home-button">Volver a Inicio</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div> 
      </div> 
    );
  };
export default Checkout