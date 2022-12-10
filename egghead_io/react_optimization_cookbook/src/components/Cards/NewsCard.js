import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import { FixedSizeList } from "react-window";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textEllipsis: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "pre",
  },
}));

// const NewsCard = ({ feed, subtitle, state, updateState }) => {
const NewsCard = ({ feed, subtitle }) => {
  const [newsState, setNewsState] = useState(false);

  const classes = useStyles();
  console.log("News card rendered");
  const Row = ({ index, style }) => (
    <ListItem key={index} style={style}>
      {feed[index].avatar ? (
        feed[index].avatar
      ) : (
        <Avatar>{feed[index].subject.charAt(0)}</Avatar>
      )}
      <ListItemText
        primary={feed[index].subject}
        secondary={feed[index].message}
        inset
        classes={{
          primary: classes.textEllipsis,
          secondary: classes.textEllipsis,
        }}
      />
    </ListItem>
  );

  const Example = () => (
    <FixedSizeList
      height={350}
      itemCount={4000}
      itemSize={60}
      width="100%"
      itemData={feed}
    >
      {Row}
    </FixedSizeList>
  );

  return (
    <Card>
      <CardHeader title="Reviews " subheader={subtitle} />
      {/* <button onClick={() => updateState(!state)}>
        {state ? "Change News" : "newsState changed"}
      </button> */}
      <button onClick={() => setNewsState(!newsState)}>
        {newsState ? "Change News" : "newsState changed"}
      </button>
      <Divider />
      <Example />
      <List>
        {/* {feed.map((item, index) => (
          <ListItem key={index}>
            {item.avatar ? (
              item.avatar
            ) : (
              <Avatar>{item.subject.charAt(0)}</Avatar>
            )}
            <ListItemText
              primary={item.subject}
              secondary={item.message}
              inset
              classes={{
                primary: classes.textEllipsis,
                secondary: classes.textEllipsis
              }}
            />
          </ListItem>
        ))} */}
      </List>
    </Card>
  );
};

NewsCard.propTypes = {
  feed: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string,
      avatar: PropTypes.element,
      subject: PropTypes.string,
      message: PropTypes.string,
    })
  ).isRequired,
  subtitle: PropTypes.string,
};

export default NewsCard;
