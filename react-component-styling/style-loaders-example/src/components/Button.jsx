import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

// console.log(styles);
// console.log(cx("button", "loading"));

class Button extends React.Component {
  state = {
    loading: false,
  };

  render() {
    // console.log(classNames("foo", "bar"));
    // console.log(classNames("foo", "bar", "baz"));

    // console.log(classNames({ foo: true }, { bar: false }));
    // console.log(classNames({ foo: true, bar: true }));
    // // falsy한 값들은 다 사라짐
    // console.log(classNames(null, false, "bar", undefined, 0, 1, { baz: null }, ""));
    // console.log(classNames(styles.button, styles.loading));
    const { loading } = this.state;
    return (
      <button
        onClick={this.startLoading}
        // className={this.state.loading ? `${styles.button} ${styles.loading}` : styles.button}
        // className={classNames(styles.button, {
        //   loading: this.state.loading, // 문제점 : loading이라는 키가 됨(styles.loading의 값이 키가 돼야함)
        // })}
        className={cx("button", { loading })} // 해결
        {...this.props}
      />
    );
  }

  startLoading = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };
}

export default Button;
