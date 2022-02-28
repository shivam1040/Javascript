try {
  aaa
  throw new Error('this is used to throw error manually');
} catch (error) {
    console.log('catch exec');
}
finally{
    console.log('will print no matter what, try gets execu or catch gets');
}