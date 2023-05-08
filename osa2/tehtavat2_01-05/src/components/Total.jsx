const Total = ({parts}) =>(
    <h4>
    total of
    &nbsp;
    {parts.reduce( (s, p) => console.log('what is happening.. ooh', s, p) || s + p.exercises, 0 )}
    &nbsp;
    exercises
    </h4>
);

export default Total