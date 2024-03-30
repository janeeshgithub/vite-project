import PropTypes from 'prop-types'
function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}<br/>
        Age: {props.age}<br /></p>
      <p>Student: {props.isStudent ? "Yes":"NO"}</p>
    </div>
  );
}
Student.propTypes={
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool,
}
Student.defaultProps={
    name:"Anonymous",
    age:0,
    isStudent:false,
}
export default Student;
