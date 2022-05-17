export function verifyMask(value: string, mask: string) {
  if (mask === 'CPF') {
    return maskCPF(value);
  } else if (mask === 'birthDay') {
    return maskBirthDay(value);
  } else if (mask === 'phone') {
    return maskPhoneNumber(value);
  }

  return value;
}

function maskCPF(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/g, '$1.$2.$3-$4');
  return value;
}

function maskBirthDay(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{2})(\d)/g, '$1/$2/$3');
  return value;
}

function maskPhoneNumber(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{5})(\d)/g, '($1) $2-$3');
  return value;
}
