import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';
import './icon.css';
import Ripples from 'react-ripples'
//import { Component } from "react";
var Rating = require('react-rating');

//Render Header
function Header() {
  return (
    <div className="header">
      <div><i className="ty-icon ty-icon-bigbasket"></i></div>
      <div className="text-center"><i className="ty-icon ty-icon-quality"></i>Quality</div>
      <div className="text-center"><i className="ty-icon ty-icon-ontime"></i>On time guarantee</div>
      <div className="text-center"><i className="ty-icon ty-icon-free-delivery"></i>Free delivery</div>
      <div className="text-center"><i className="ty-icon ty-icon-return"></i>Return policy</div>
    </div>
  );
};
ReactDOM.render(
  <Header/>,
  document.getElementById('header')
);
//Render Header

//SuccessIcon Animated
function SuccessIcon() {
  return (
    <div className="Thankyou">
      <div className="success-icon">
            <svg id="successAnimation" className="animated" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
              <path id="successAnimationResult" fill="#D8D8D8" d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"/>
              <circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#979797" strokeWidth="2" strokeLinecap="round" fill="transparent"/>
              <polyline id="successAnimationCheck" stroke="#979797" strokeWidth="2" points="23 34 34 43 47 27" fill="transparent"/>
            </svg>
            <p className="text-primary txt-bold fadeIn">Yaay.. Your order is placed!</p>
      </div>
    </div>
  );
};
ReactDOM.render(
  <SuccessIcon/>,
  document.getElementById('success')
);
//SuccessIcon Animated

//FeedbackForm for Rating
class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Tell us what went wrong.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Feedback: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="feedback-form" onSubmit={this.handleSubmit}>
        <textarea className='form-control' placeholder={this.state.value} onChange={this.handleChange} />
        <div className="clearfix">
          <Ripples className="btn-ripple fl-rt" color="#666">
            <button type="submit" className="btn btn-secondary">SUBMIT</button>
          </Ripples>
          <Ripples className="btn-ripple fl-rt" color="#dfdfdf">
            <button type="button" className="btn btn-default">NOT NOW</button>
          </Ripples>
        </div>
      </form>
    );
  }
}
//FeedbackForm for Rating

//Star Rating handling
class HandleRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    if(event <= 3){
      alert('You have rated less than' + event + 'Show feedback')
    }
    else if (event === 5) {
      alert('You have given' +event+ 'Star, Show Refer&Earn ')
    }
  }
  render() {
    return (
        <div className="clearfix">
        <span className="rating-txt">How was everything?</span>
        <Rating {...this.props} onChange={this.handleClick} initialRating={this.state.value} />
        <FeedbackForm/>
        </div>
    );
  }
}
ReactDOM.render(
    <HandleRating
    emptySymbol={<img className="star" alt="star" src={require('./star-o.svg')}/>}
    fullSymbol={<img className="star" alt="star" src={require('./star.svg')}/>}
    fractions={2}/>,
  document.getElementById('rating')
);
//Star Rating handling

//Orderdetails Stub Data
const orderdetails = {
    status:'OK',
    status_code: 200,
    message: 'kugkjujgliugliu',
    result: {
        delivery_adddress: '# 5. 1st floor 2nd cross j.j churchRoad near j.j church Ejipura Bangalore - 560047',
        shipments:{
            icon: 'bike',
            slot_type: 'Standard',
            total_items_in_shipment:45,
            slot_time:'Today within next 90 mins',
            shipment_value:'1500',
            // products:[
            //
            // ]

        },
        order: {
            payment_status:'successful',
            order_ammount: 4500,
            saved_ammout: 200,
            message:'popup message',
            voucher:{
                is_voucher_applied:true,
                voucher_message:'Voucher Applied'
            }
        }
    }
};
//Orderdetails Stub Data

//Component Deliveryinfo
function Deliveryinfo(props) {
  return (
    <div className="pannel-item grid-container2 deliveryinfo">
      <div className="grid-item title"><i className="ty-icon ty-icon-location"></i>Delivery Address</div>
      <div className="grid-item address">{props.result.delivery_adddress}</div>
    </div>
  );
}
//Component Deliveryinfo

//Component Shipmentinfo
function Shipmentinfo(props) {
  return (
    <div className="pannel-item grid-container4 shipmentinfo">
      <div className="grid-item shipment"><i className={"ty-icon " + (props.shipments.icon=='successfull' ? 'ty-icon-exp-del' : 'ty-icon-std-delivery')}></i>Shipment 1: {props.shipments.slot_type}</div>
      <div className="grid-item items">

          <div>{props.shipments.total_items_in_shipment}</div>
          <div>Items</div>
      </div>
      <div className="grid-item slot">{props.shipments.slot_time}</div>
      <div className="grid-item price"> Rs {props.shipments.shipment_value}</div>
    </div>
  );
}
//Component Shipmentinfo

//Component Voucherinfo
function Voucherinfo(props) {
  return (
    <div className="grid-item voucherinfo">
      <span className="text-primary">{props.voucher.voucher_message}</span>
      <div>The cashback amount Rs 500 will be credited within 5 days</div>
    </div>
  );
}
//Component Voucherinfo

//Component Orderinfo
function Orderinfo(props) {
  return (
    <div className="grid-container2 orderinfo">
      <Voucherinfo voucher={props.order.voucher}/>
      <div className="grid-item paymentinfo">
      <table id="t01">
        <tbody>
          <tr>
              <td>Payment Status : </td>
              <td className={"txt-bold text-left " + (props.order.payment_status=='successfull' ? 'text-light' : 'text-primary')}>
              {props.order.payment_status}
              <i className={"ty-icon " + (props.order.payment_status==='successfull' : 'ty-icon-info-orange-lined')}></i>
              <i className={"ty-icon " + (props.order.payment_status==='failed' : 'ty-icon-info-red-lined')}></i>
              </td>
          </tr>
          <tr>
              <td>Order Amount :</td>
              <td className="txt-bold text-left">Rs {props.order.order_ammount}</td>
          </tr>
          <tr>
              <td>You Saved :</td>
              <td  className="text-primary text-left">Rs {props.order.saved_ammout}</td>
          </tr>
          </tbody>
      </table>
      </div>
    </div>
  );
}
//Component Orderinfo

//Component Orderdetails
function Orderdetails(props) {
  return (
    <div className="pannel">
      <Deliveryinfo result={props.result} />

      <Shipmentinfo shipments={props.result.shipments} />
      <Shipmentinfo shipments={props.result.shipments} />
      <Shipmentinfo shipments={props.result.shipments} />

      <Orderinfo order={props.result.order}
                 voucher={orderdetails.result.order}/>
    </div>
  );
}

ReactDOM.render(
  <Orderdetails
    result={orderdetails.result}
    shipments={orderdetails.result.shipments}
    order={orderdetails.result.order}
    voucher={orderdetails.result.order}
  />,
  document.getElementById('deliveryinfo')
);
//Component Orderdetails



//Assistance section
function Assistcard(props) {
  return (
    <div className="grid-container3">
        <div className="grid-item card">
          <div className="text-blue txt-bold text-medium"><i className="ty-icon ty-icon-voucher"></i>PAY NOW</div>
          <p className="text-meduim txt-bold">Pay online for this order</p>
          <p className="text-light">Complete order payment for cash-free delivery</p>
        </div>
        <div className="grid-item card">
          <div className="text-blue txt-bold text-medium"><i className="ty-icon ty-icon-add-item"></i>FORGOT ITEM?</div>
          <p className="text-meduim txt-bold">Pay online for this order</p>
          <p className="text-light">Complete order payment for cash-free delivery</p>
        </div>
        <div className="grid-item card">
          <div className="text-blue txt-bold text-medium"><i className="ty-icon ty-icon-help"></i>HELP</div>
          <p className="text-meduim txt-bold">Pay online for this order</p>
          <p className="text-light">Complete order payment for cash-free delivery</p>
        </div>
    </div>
  );
}
ReactDOM.render(
  <Assistcard/>,
  document.getElementById('assistance')
);
//Assistance section

//Assistance section
function Continuebtn(props) {
  return (
    <Ripples color="green">
      <button className="btn btn-primary">Continue Shopping</button>
    </Ripples>
  );
}
ReactDOM.render(
  <Continuebtn/>,
  document.getElementById('continue')
);

//Render Footer
function Footer() {
  return (
    <div className="footer">
      <p className="text-center">For Futher enquiries: Call: 1860123100 | E-mail: customerservice@bigbasket.com</p>
    </div>
  );
};
ReactDOM.render(
  <Footer/>,
  document.getElementById('footer')
);
//Render Footer
