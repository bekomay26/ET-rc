import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Reaction } from "/client/api";
import PropTypes from "prop-types";
import ReviewCard from "../mixins/cards/ReviewCard";
import ReviewForm from "../mixins/forms/ReviewForm";
import CustomButton from "../mixins/buttons";

export default class ShopReviewsList extends Component {
        static propTypes = {
          handlePageChange: PropTypes.func.isRequired,
          pushNewCommentToState: PropTypes.func.isRequired,
          reviews: PropTypes.array.isRequired
         
        }
        constructor(props) {
          super(props);
          // constructor here for readability purposes
          this.state = {
            currentRating: 0,
            content: ""
          };
        }

    changeRating = (value) => this.setState({ currentRating: value });

    handleChange = (e) => this.setState({ content: e.target.value });

    handleClick = () => {
    // make the call
      const { content, currentRating } = this.state;
      const { pushNewCommentToState, recomputeRating } = this.props;
      if (!content.length || currentRating < 1) return;
      const user = Meteor.user();
      if (!user) return; // do nothing if there is no current user, this is unlikely to happen
      const reviewObject = {
        username: user.username || "anonymous",
        rating: currentRating,
        review: content,
        type: 2,
        userId: Meteor.userId(),
        destination: Reaction.Router.getParam("id")
      };
      Meteor.call("create.review", reviewObject);
      pushNewCommentToState(reviewObject);
      recomputeRating();
      this.setState({ content: "", currentRating: 0 });
    }

    renderItems = () => this.props.reviews.map((reviewObject, index) => <ReviewCard key={`item-${index}`} review={reviewObject}/>)

    render = () => {
      const { currentRating, content } = this.state;
      return (
        <div
          style={{
            height: "70%",
            zIndex: 2,
            width: "40%",
            borderRadius: "5px",
            paddingTop: "20px",
            backgroundColor: "white",
            position: "relative"
          }}
        >
          <ReviewForm
            currentRating={currentRating}
            handleClick={this.handleClick}
            changeRating={this.changeRating}
            handleChange={this.handleChange}
            value={content}
          />
          <div
            style={{
              height: "55%",
              width: "100%",
              backgroundColor: "#F2F3F4",
              overflowY: "scroll",
              marginTop: "10px"
            }}
          >
            { this.props.reviews.length ?  this.renderItems() : <p style={{ fontSize: "18px", marginTop: "20px", textAlign: "center", position: "relative", bottom: "-100px", fontWeight: "bold", color: "#CACFD2" }}> Seems like there are no reviews </p> }
            { this.props.reviews.length && this.props.reviews.length > 4 && <CustomButton
              style={{
                position: "relative",
                width: "150px",
                backgroundColor: "white",
                borderRadius: "0px",
                borderColor: "white",
                color: "#6C3483",
                height: "40px",
                left: "35%",
                top: "-18px"
              }}
              handleClick={this.props.handlePageChange}
              name="Load More"
            />
            }
          </div>
        </div>
      );
    }
}

