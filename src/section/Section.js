import React from 'react';


export const Section = ({positive, total, good, neutral, bad}) => (
<>
<p>Good: {good}</p>
<p>Neutral: {neutral}</p>
<p>Bad: {bad}</p>
<p>Total: {total} </p>
<p>Positive feedback: {positive}%</p>
</>
);