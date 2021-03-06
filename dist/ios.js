const getIOSVersion = async (storeURL = '', country = 'jp') => {
    const appID = storeURL.match(/.+id([0-9]+)\??/);
    if (!appID) {
        throw new Error('iosStoreURL is invalid.');
    }
    const response = await fetch(`https://itunes.apple.com/lookup?id=${appID[1]}&country=${country}`)
        .then(r => r.text())
        .then(r => JSON.parse(r));
    if (response.results.length === 0) {
        throw new Error(`appID(${appID[1]}) is not released.`);
    }
    return response.results[0].version;
};
export default getIOSVersion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2lvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLGFBQWEsR0FBRyxLQUFLLEVBQUUsV0FBbUIsRUFBRSxFQUFFLFVBQWtCLElBQUksRUFBbUIsRUFBRTtJQUM3RixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFaEQsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztLQUM1QztJQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLHNDQUFzQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksT0FBTyxFQUFFLENBQUM7U0FDOUYsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25CLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1QixJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0tBQ3hEO0lBRUQsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFFRixlQUFlLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldElPU1ZlcnNpb24gPSBhc3luYyAoc3RvcmVVUkw6IHN0cmluZyA9ICcnLCBjb3VudHJ5OiBzdHJpbmcgPSAnanAnKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgY29uc3QgYXBwSUQgPSBzdG9yZVVSTC5tYXRjaCgvLitpZChbMC05XSspXFw/Py8pO1xuXG4gIGlmICghYXBwSUQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2lvc1N0b3JlVVJMIGlzIGludmFsaWQuJyk7XG4gIH1cblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vbG9va3VwP2lkPSR7YXBwSURbMV19JmNvdW50cnk9JHtjb3VudHJ5fWApXG4gICAgLnRoZW4ociA9PiByLnRleHQoKSlcbiAgICAudGhlbihyID0+IEpTT04ucGFyc2UocikpO1xuXG4gIGlmIChyZXNwb25zZS5yZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgYXBwSUQoJHthcHBJRFsxXX0pIGlzIG5vdCByZWxlYXNlZC5gKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5yZXN1bHRzWzBdLnZlcnNpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRJT1NWZXJzaW9uO1xuIl19