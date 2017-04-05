export function addActionsData (data = []) {
  return data.map(obj => { return {...obj, actions: obj} })
}

export function refactorHospitalList (data = []) {
  return data.map(obj => { return { value: obj.Id, label: obj.Value } })
}

export function filterIsEnabled (data = []) {
  return data.filter(obj => obj.IsEnabled === true)
}

export function filterMember (data = [], role) {
  return data.filter(obj => obj.Role === role && obj.IsEnabled === true)
}

