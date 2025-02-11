const getRolesMock = async (roles) => {
  const data = roles.map((role) => {
    return {
      id: role.id,
      key: role.key,
      name: role.name,
      isAdmin: role.isAdmin,
      description: role.description,
      createdAt: role.createdAt.toISOString(),
      updatedAt: role.updatedAt.toISOString(),
    };
  });

  return {
    data: data,
    meta: {
      count: data.length,
      currentPage: null,
      isArray: true,
      totalPages: null,
      type: 'Role',
    },
  };
};

export default getRolesMock;
