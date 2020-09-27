import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

const CommentItem = ({
  postId,
  comment: { text, name, avatar, user, date },
  auth,
}) => {
  return (
    <div class="post bg-white p-1 my-1">
      <div>
        <Link to={"/profile"}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p class="my-1">{text}</p>
        <p class="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateProps = (state) => ({ auth: state.auth });

export default connect(mapStateProps, {})(CommentItem);
