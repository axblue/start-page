import { memo, useEffect, useState, useCallback } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { cleanUrl, iamgeToDataURL } from "helpers";
import bookmarksItemStyles from "./styles";

const BookmarksItem = ({
  bookmark,
  options,
  onContextMenu,
  updateBookmark,
}) => {
  const { id, title, url, icon, brandColor } = bookmark;
  const [loadedBackground, setLoadedBackground] = useState(brandColor);
  const [color, setColor] = useState(brandColor);
  const classes = bookmarksItemStyles();

  const handleContextMenu = useCallback(
    (event, id) => {
      onContextMenu(event, id);
    },
    [onContextMenu]
  );

  useEffect(() => {
    let isMounted = true;
    async function getBrandColor() {
      return await fetch(
        `https://brand-color.herokuapp.com/api/getColor?url=${url}`
      )
        .then((response) => response.json())
        .then(({ color1 }) => {
          if (isMounted) {
            setLoadedBackground(true);
          }
          return color1;
        })
        .then((color) => {
          if (isMounted) {
            setColor(color);
          }
          return color;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    async function getIcon() {
      return await iamgeToDataURL(
        `https://api.faviconkit.com/${cleanUrl(url)}/57`
      )
        .then((iconUrl) => iconUrl)
        .catch((err) => {
          console.log(err);
        });
    }
    if (!(brandColor || icon)) {
      Promise.all([getBrandColor(), getIcon()]).then(
        (data) => {
          if (isMounted) {
            updateBookmark(id, data);
          }
        },
        (reason) => {
          console.log(reason);
        }
      );
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Card
      className={classes.root}
      style={options.isBrandColor ? { background: color } : null}
    >
      <CardActionArea
        href={url}
        className={classes.action}
        onContextMenu={(e) => handleContextMenu(e, id)}
      >
        <CardContent className={classes.content}>
          {loadedBackground ? null : (
            <CircularProgress className={classes.progressBg} size={15} />
          )}
          <img
            style={{
              display: icon ? "block" : "none",
            }}
            className={classes.media}
            src={icon}
            alt="title"
          />
          {icon ? null : <CircularProgress size={30} />}

          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default memo(BookmarksItem);
