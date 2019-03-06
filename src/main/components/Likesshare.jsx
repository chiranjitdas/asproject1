import React from 'react';
import { clap } from '../../redux/actions/actions';

import '../../assets/font-awesome/css/font-awesome.min.css';
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {
      products: state.products.products
  }
}
class Likesshare extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
      likes: this.props.totallikes,
      liked: false,
      wishlisted: false,
      product_id: this.props.product_id
    }
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes() {
    //alert("asd");
    if(!this.state.liked) {
      this.props.clap(this.state.product_id, true)
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          liked: true
        };
      });
    } else {
      this.props.clap(this.state.product_id, false)
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          liked: false
        };
      });
    }    
  }
  updateWishlist() {
    //alert("asd");
    if(!this.state.wishlisted) {
      this.props.clap(this.state.product_id, true)
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          wishlisted: true
        };
      });
    } else {
      this.props.clap(this.state.product_id, false)
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          wishlisted: false
        };
      });
    }    
  }

  render(){
    const classnamelike = this.state.liked ? 'fa fa-heart fa-2x' : 'fa fa-heart-o fa-2x'
    const image_name = this.state.wishlisted ? '/img/wishlistadded.png' : '/img/wishlistadd.png'
    return(
      <div>
        <a href="#!" onClick={this.updateLikes}><i className={ classnamelike }></i></a> &nbsp;&nbsp;
        <a href="#!" onClick={this.updateWishlist}><img src={ image_name } alt="img" style={{marginTop:-10,width:30}} /></a>
        <br />
        <p className="Likes">{this.state.likes} Likes</p>
      </div>
    );

  }
}
export default connect(mapStateToProps, { clap })(Likesshare);