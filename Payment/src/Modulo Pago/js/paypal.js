const convertirDolar = () => {

    return (totalServicio() / 60.00).toFixed(2)

}

paypal.Buttons({
    style: {
        shape: "pill",
        layout: "vertical",
        color: "blue",
        label: "checkout",
    },
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount:   
 {
            value: convertirDolar(),
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details)   
 {
        alert("Pago aplicado correctamente!")
      });
    },
    onCancel: function() {
        alert("Pago cancelado");
    } 
  }).render('#paypal-button-container');