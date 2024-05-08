import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal } from '../Reduxwork/CartSlice'
import axios from 'axios'

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const PlaceOrder = () => {

  async function showRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load.Are you online?");
      return;
    }

    const ordData = {
      amt: CartTotalAmt
    }
    const data = await axios.post('http://localhost:5000/razorpay', ordData)
    console.log(data);
        const options = {
          key: "rzp_test_9th3ukiKK1ibNm",
          currency: data.data.currency,
          amount: data.data.amount.toString(),
          order_id: data.data.id,
          name: "Book Food",
          description: "Thank You",
          //image: "http://localhost:1337/logo.svg",
          handler: function (response) {
            //  alert(response.razorpay_payment_id);
            //  alert(response.razorpay_order_id);
            //  alert(response.razorpay_signature);

            alert("Transaction successful");
          },
          prefill: {
            name: "Rajat",
            email: "rajat@rajat.com",
            phone_number: "9899999999",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
  
    
    // .then((data) => {
    //           })
    //   .catch((err) => console.log(err))

    // const data = await fetch("", {
    //   method: "POST",
    // }).then((t) => t.json());


  }

  const { CartItems, CartTotalAmt } = useSelector((state) => state.cart)
  const dispatcher = useDispatch()

  dispatcher(calculateTotal())

  function addOrder() {
    const finalItems = []
    CartItems.map((fod) => {
      finalItems.push({ food: fod._id, qty: fod.qty })
    })

    const orderData = {
      ordamt: CartTotalAmt,
      itemno: CartItems.length,
      cid: "642acd389de5ea6fa6ac7e6e",
      orditems: finalItems
    }

    axios.post("http://localhost:5000/addorder", orderData)
      .then((result) => {
        // alert("Order Placed")
        showRazorpay();
      }).catch((err) => {
        alert("Not Place")
        console.log(err)
      })
  }


  return (
    <div>
      <Row>
        {
          CartItems.map((item) => {
            const iid = item._id
            return (
              <Col sm={12} md={4} lg={3}>
                <Card className='place'>
                  <Card.Header className='pimg'>
                    <Card.Img className='plcimg' src={"http://localhost:5000".concat(item.FoodImage)} />
                  </Card.Header>
                  <Card.Body>
                    <p>Food : {item.FoodName}</p>
                    <p>Price : {item.FoodPrice}</p>
                  </Card.Body>

                </Card>
              </Col>
            )
          })
        }
      </Row>
      <Row>
        <Col><h3>Total: {CartTotalAmt}</h3></Col>
        <Col><Button onClick={() => addOrder()}>Place Order</Button></Col>
      </Row>

    </div>
  )
}

export default PlaceOrder