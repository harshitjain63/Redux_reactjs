import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatistics } from '../redux/actions';
import { RootState } from '../redux/store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

// React and useEffect: React is used to create the component and useEffect is used to perform side effects
// (like fetching data) when the component mounts.

// useDispatch and useSelector: These are hooks from react-redux to interact with the Redux store.
// useDispatch allows you to dispatch actions, and useSelector lets you read data from the store.

// fetchStatistics: This is the action creator (a thunk function) that triggers the asynchronous data fetching.
// RootState: This type represents the shape of your Redux store’s state, helping TypeScript understand the structure of your state.

// ThunkDispatch and AnyAction: Types from redux-thunk and redux respectively, which help TypeScript understand the types of actions 
//and dispatch functions.

//dispatch: ThunkDispatch<RootState, void, AnyAction>: This tells TypeScript that dispatch is of the type ThunkDispatch<RootState, void, AnyAction>, ensuring that TypeScript understands that dispatch can be used to dispatch thunk actions.

const Statistics: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
 //useSelector: This is another hook from react-redux that allows you to extract data from the Redux store's state. It takes a function as an argument, which receives the entire Redux state and returns the specific slice of state you want.
 //(state: RootState) => state: This is a selector function passed to useSelector. It receives the entire state of the Redux store (typed as RootState) and returns it. In this case, it's returning the whole state object, which is then destructured to get loading, data, and error.
  const { loading, data, error } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  return (
    <div>
      <h1>Sales Statistics</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>Sales Data</h2>
          <ul>
            {data.map((post: any) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Statistics;
