const getUserData = (username, setIsLoading, dispatch, user_action,setIsError, isError, setErrorMessage) => {
  fetch(`/users/${username}`, {
    method: "GET",
    headers: {
      Accept: "Accept: application/vnd.github+json",
      Authorization: process.env.REACT_APP_API_KEY,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        if(data.message){
          if(data.message === "Not Found"){
            let error_msg = data.message;
            setErrorMessage(`User ${error_msg}`);
            setIsError(true);
            console.log("is error", isError);
            return
          }
          return
        }
        console.log("DATA", data);
        dispatch({ type: `${user_action}`, payload: data });
        setIsLoading(false);
      }
    })
    .catch((err) => {
      if (err) {
        console.log("ERROR", err);
      }
    });
};

export default getUserData;
