import TravelPlan from '../assets/jsons/plan.json';
const fakeApiCall = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(TravelPlan);
    }, 2000);
  });
};
export const calltravelPlan = async (
  onSuccess: Function,
  onError: Function,
) => {
  try {
    const apiData = await fakeApiCall();
    if (apiData?.data) {
      onSuccess(apiData?.data);
      return;
    }
    onError?.();
  } catch (error) {
    onError?.();
  }
};
