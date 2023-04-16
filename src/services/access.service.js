class AccessService {
  static signUp = async ({ email, password, name }) => {
    return [{ email, password, name }];
  };
}

module.exports = AccessService;
