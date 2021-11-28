var apiSchema = [
   {
      "children" : [
         {
            "children" : [
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Returns the rule database digest. This is used internally for cluster synchronization.",
                        "method" : "GET",
                        "name" : "ruledb_digest",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "returns" : {
                           "type" : "string"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/ruledb/digest",
                  "text" : "digest"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Get common rule properties.",
                                    "method" : "GET",
                                    "name" : "config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "active" : {
                                             "type" : "boolean"
                                          },
                                          "direction" : {
                                             "type" : "integer"
                                          },
                                          "id" : {
                                             "type" : "integer"
                                          },
                                          "name" : {
                                             "type" : "string"
                                          },
                                          "priority" : {
                                             "type" : "integer"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "allowtoken" : 1,
                                    "description" : "Set rule properties.",
                                    "method" : "PUT",
                                    "name" : "update_config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "active" : {
                                             "description" : "Flag to activate rule.",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          },
                                          "direction" : {
                                             "description" : "Rule direction. Value `0` matches incoming mails, value `1` matches outgoing mails, and value `2` matches both directions.",
                                             "maximum" : 2,
                                             "minimum" : 0,
                                             "optional" : 1,
                                             "type" : "integer",
                                             "typetext" : "<integer> (0 - 2)"
                                          },
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "name" : {
                                             "description" : "Rule name",
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "priority" : {
                                             "description" : "Rule priotity.",
                                             "maximum" : 100,
                                             "minimum" : 0,
                                             "optional" : 1,
                                             "type" : "integer",
                                             "typetext" : "<integer> (0 - 100)"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/rules/{id}/config",
                              "text" : "config"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "allowtoken" : 1,
                                          "description" : "Delete group from 'from' list.",
                                          "method" : "DELETE",
                                          "name" : "delete_from_group",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Rule ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/rules/{id}/from/{ogroup}",
                                    "text" : "{ogroup}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Get 'from' group list.",
                                    "method" : "GET",
                                    "name" : "from",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 },
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add  group to 'from' list.",
                                    "method" : "POST",
                                    "name" : "add_from_group",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "ogroup" : {
                                             "description" : "Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/rules/{id}/from",
                              "text" : "from"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "allowtoken" : 1,
                                          "description" : "Delete group from 'to' list.",
                                          "method" : "DELETE",
                                          "name" : "delete_to_group",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Rule ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/rules/{id}/to/{ogroup}",
                                    "text" : "{ogroup}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Get 'to' group list.",
                                    "method" : "GET",
                                    "name" : "to",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 },
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add  group to 'to' list.",
                                    "method" : "POST",
                                    "name" : "add_to_group",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "ogroup" : {
                                             "description" : "Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/rules/{id}/to",
                              "text" : "to"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "allowtoken" : 1,
                                          "description" : "Delete group from 'when' list.",
                                          "method" : "DELETE",
                                          "name" : "delete_when_group",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Rule ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/rules/{id}/when/{ogroup}",
                                    "text" : "{ogroup}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Get 'when' group list.",
                                    "method" : "GET",
                                    "name" : "when",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 },
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add  group to 'when' list.",
                                    "method" : "POST",
                                    "name" : "add_when_group",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "ogroup" : {
                                             "description" : "Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/rules/{id}/when",
                              "text" : "when"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "allowtoken" : 1,
                                          "description" : "Delete group from 'what' list.",
                                          "method" : "DELETE",
                                          "name" : "delete_what_group",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Rule ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/rules/{id}/what/{ogroup}",
                                    "text" : "{ogroup}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Get 'what' group list.",
                                    "method" : "GET",
                                    "name" : "what",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 },
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add  group to 'what' list.",
                                    "method" : "POST",
                                    "name" : "add_what_group",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "ogroup" : {
                                             "description" : "Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/rules/{id}/what",
                              "text" : "what"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "allowtoken" : 1,
                                          "description" : "Delete group from 'action' list.",
                                          "method" : "DELETE",
                                          "name" : "delete_action_group",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Rule ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/rules/{id}/action/{ogroup}",
                                    "text" : "{ogroup}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Get 'action' group list.",
                                    "method" : "GET",
                                    "name" : "action",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 },
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add  group to 'action' list.",
                                    "method" : "POST",
                                    "name" : "add_action_group",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Rule ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "ogroup" : {
                                             "description" : "Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/rules/{id}/action",
                              "text" : "action"
                           }
                        ],
                        "info" : {
                           "DELETE" : {
                              "allowtoken" : 1,
                              "description" : "Delete rule.",
                              "method" : "DELETE",
                              "name" : "delete_rule",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Rule ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Directory index.",
                              "method" : "GET",
                              "name" : "index",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Rule ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "subdir" : {
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{subdir}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/rules/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Get list of rules.",
                        "method" : "GET",
                        "name" : "list_rules",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "id" : {
                                    "type" : "integer"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{id}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Create new rule.",
                        "method" : "POST",
                        "name" : "create_rule",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "active" : {
                                 "description" : "Flag to activate rule.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "direction" : {
                                 "description" : "Rule direction. Value `0` matches incoming mails, value `1` matches outgoing mails, and value `2` matches both directions.",
                                 "maximum" : 2,
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - 2)"
                              },
                              "name" : {
                                 "description" : "Rule name",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "priority" : {
                                 "description" : "Rule priotity.",
                                 "maximum" : 100,
                                 "minimum" : 0,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - 100)"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/ruledb/rules",
                  "text" : "rules"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "info" : {
                                 "DELETE" : {
                                    "allowtoken" : 1,
                                    "description" : "Delete 'actions' object.",
                                    "method" : "DELETE",
                                    "name" : "delete_action",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/action/objects/{id}",
                              "text" : "{id}"
                           }
                        ],
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "List 'actions' objects.",
                              "method" : "GET",
                              "name" : "list_actions",
                              "parameters" : {
                                 "additionalProperties" : 0
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "id" : {
                                          "description" : "Action Object ID.",
                                          "pattern" : "\\d+_\\d+",
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{id}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/action/objects",
                        "text" : "objects"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Read 'BCC' object settings.",
                                    "method" : "GET",
                                    "name" : "read_bcc",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "allowtoken" : 1,
                                    "description" : "Update 'BCC' object.",
                                    "method" : "PUT",
                                    "name" : "update_bcc",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          },
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Action name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "original" : {
                                             "default" : 1,
                                             "description" : "Send the original, unmodified mail.",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          },
                                          "target" : {
                                             "description" : "Send a Blind Carbon Copy to this email address.",
                                             "format" : "email",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/action/bcc/{id}",
                              "text" : "{id}"
                           }
                        ],
                        "info" : {
                           "POST" : {
                              "allowtoken" : 1,
                              "description" : "Create 'BCC' object.",
                              "method" : "POST",
                              "name" : "bcc",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "info" : {
                                       "description" : "Informational comment.",
                                       "maxLength" : 255,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "name" : {
                                       "description" : "Action name.",
                                       "maxLength" : 255,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "original" : {
                                       "default" : 1,
                                       "description" : "Send the original, unmodified mail.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "target" : {
                                       "description" : "Send a Blind Carbon Copy to this email address.",
                                       "format" : "email",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "description" : "The object ID.",
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/action/bcc",
                        "text" : "bcc"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Read 'Header Attribute' object settings.",
                                    "method" : "GET",
                                    "name" : "read_field",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "allowtoken" : 1,
                                    "description" : "Update 'Header Attribute' object.",
                                    "method" : "PUT",
                                    "name" : "update_field",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "field" : {
                                             "description" : "The Field",
                                             "maxLength" : 1024,
                                             "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                             "type" : "string"
                                          },
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          },
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Action name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "value" : {
                                             "description" : "The Value",
                                             "maxLength" : 1024,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/action/field/{id}",
                              "text" : "{id}"
                           }
                        ],
                        "info" : {
                           "POST" : {
                              "allowtoken" : 1,
                              "description" : "Create 'Header Attribute' object.",
                              "method" : "POST",
                              "name" : "field",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "field" : {
                                       "description" : "The Field",
                                       "maxLength" : 1024,
                                       "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                       "type" : "string"
                                    },
                                    "info" : {
                                       "description" : "Informational comment.",
                                       "maxLength" : 255,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "name" : {
                                       "description" : "Action name.",
                                       "maxLength" : 255,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "value" : {
                                       "description" : "The Value",
                                       "maxLength" : 1024,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "description" : "The object ID.",
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/action/field",
                        "text" : "field"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Read 'Notification' object settings.",
                                    "method" : "GET",
                                    "name" : "read_notification",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "allowtoken" : 1,
                                    "description" : "Update 'Notification' object.",
                                    "method" : "PUT",
                                    "name" : "update_notification",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "attach" : {
                                             "default" : 0,
                                             "description" : "Attach original E-Mail",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          },
                                          "body" : {
                                             "description" : "The Notification Body",
                                             "maxLength" : 2048,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          },
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Action name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "subject" : {
                                             "description" : "The Notification subject",
                                             "maxLength" : 100,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "to" : {
                                             "description" : "The Receiver E-Mail address",
                                             "maxLength" : 200,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/action/notification/{id}",
                              "text" : "{id}"
                           }
                        ],
                        "info" : {
                           "POST" : {
                              "allowtoken" : 1,
                              "description" : "Create 'Notification' object.",
                              "method" : "POST",
                              "name" : "notification",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "attach" : {
                                       "default" : 0,
                                       "description" : "Attach original E-Mail",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "body" : {
                                       "description" : "The Notification Body",
                                       "maxLength" : 2048,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "info" : {
                                       "description" : "Informational comment.",
                                       "maxLength" : 255,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "name" : {
                                       "description" : "Action name.",
                                       "maxLength" : 255,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "subject" : {
                                       "description" : "The Notification subject",
                                       "maxLength" : 100,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "to" : {
                                       "description" : "The Receiver E-Mail address",
                                       "maxLength" : 200,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "description" : "The object ID.",
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/action/notification",
                        "text" : "notification"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Read 'Disclaimer' object settings.",
                                    "method" : "GET",
                                    "name" : "read_disclaimer",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "allowtoken" : 1,
                                    "description" : "Update 'Disclaimer' object.",
                                    "method" : "PUT",
                                    "name" : "update_disclaimer",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "disclaimer" : {
                                             "description" : "The Disclaimer",
                                             "maxLength" : 2048,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          },
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Action name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/action/disclaimer/{id}",
                              "text" : "{id}"
                           }
                        ],
                        "info" : {
                           "POST" : {
                              "allowtoken" : 1,
                              "description" : "Create 'Disclaimer' object.",
                              "method" : "POST",
                              "name" : "disclaimer",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "disclaimer" : {
                                       "description" : "The Disclaimer",
                                       "maxLength" : 2048,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "info" : {
                                       "description" : "Informational comment.",
                                       "maxLength" : 255,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "name" : {
                                       "description" : "Action name.",
                                       "maxLength" : 255,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "description" : "The object ID.",
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/action/disclaimer",
                        "text" : "disclaimer"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Read 'Remove attachments' object settings.",
                                    "method" : "GET",
                                    "name" : "read_removeattachments",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "allowtoken" : 1,
                                    "description" : "Update 'Remove attachments' object.",
                                    "method" : "PUT",
                                    "name" : "update_removeattachments",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "all" : {
                                             "description" : "Remove all attachments",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          },
                                          "id" : {
                                             "description" : "Action Object ID.",
                                             "pattern" : "\\d+_\\d+",
                                             "type" : "string"
                                          },
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Action name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "quarantine" : {
                                             "default" : 0,
                                             "description" : "Copy original mail to attachment Quarantine.",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          },
                                          "text" : {
                                             "description" : "The replacement text.",
                                             "maxLength" : 2048,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/action/removeattachments/{id}",
                              "text" : "{id}"
                           }
                        ],
                        "info" : {
                           "POST" : {
                              "allowtoken" : 1,
                              "description" : "Create 'Remove attachments' object.",
                              "method" : "POST",
                              "name" : "removeattachments",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "all" : {
                                       "description" : "Remove all attachments",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "info" : {
                                       "description" : "Informational comment.",
                                       "maxLength" : 255,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "name" : {
                                       "description" : "Action name.",
                                       "maxLength" : 255,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "quarantine" : {
                                       "default" : 0,
                                       "description" : "Copy original mail to attachment Quarantine.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "text" : {
                                       "description" : "The replacement text.",
                                       "maxLength" : 2048,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "description" : "The object ID.",
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/action/removeattachments",
                        "text" : "removeattachments"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Directory index.",
                        "method" : "GET",
                        "name" : "index",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "subdir" : {
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{subdir}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/ruledb/action",
                  "text" : "action"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Get 'what' group properties",
                                    "method" : "GET",
                                    "name" : "get_config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "integer"
                                          },
                                          "info" : {
                                             "type" : "string"
                                          },
                                          "name" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "allowtoken" : 1,
                                    "description" : "Modify 'what' group properties",
                                    "method" : "PUT",
                                    "name" : "set_config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Group name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/what/{ogroup}/config",
                              "text" : "config"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "allowtoken" : 1,
                                          "description" : "Remove an object from the 'what' group.",
                                          "method" : "DELETE",
                                          "name" : "delete_object",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Group ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/what/{ogroup}/objects/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "List 'what' group objects.",
                                    "method" : "GET",
                                    "name" : "objects",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "links" : [
                                          {
                                             "href" : "{id}",
                                             "rel" : "child"
                                          }
                                       ],
                                       "type" : "array"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/objects",
                              "text" : "objects"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'ContentType Filter' object settings.",
                                          "method" : "GET",
                                          "name" : "read_contenttype",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'ContentType Filter' object.",
                                          "method" : "PUT",
                                          "name" : "update_contenttype",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "contenttype" : {
                                                   "description" : "Content Type",
                                                   "maxLength" : 1024,
                                                   "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                                   "type" : "string"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/what/{ogroup}/contenttype/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'ContentType Filter' object.",
                                    "method" : "POST",
                                    "name" : "contenttype",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "contenttype" : {
                                             "description" : "Content Type",
                                             "maxLength" : 1024,
                                             "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                             "type" : "string"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/contenttype",
                              "text" : "contenttype"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'Match Field' object settings.",
                                          "method" : "GET",
                                          "name" : "read_matchfield",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'Match Field' object.",
                                          "method" : "PUT",
                                          "name" : "update_matchfield",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "field" : {
                                                   "description" : "The Field",
                                                   "maxLength" : 1024,
                                                   "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                                   "type" : "string"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "value" : {
                                                   "description" : "The Value",
                                                   "maxLength" : 1024,
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/what/{ogroup}/matchfield/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'Match Field' object.",
                                    "method" : "POST",
                                    "name" : "matchfield",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "field" : {
                                             "description" : "The Field",
                                             "maxLength" : 1024,
                                             "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                             "type" : "string"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "value" : {
                                             "description" : "The Value",
                                             "maxLength" : 1024,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/matchfield",
                              "text" : "matchfield"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'Spam Filter' object settings.",
                                          "method" : "GET",
                                          "name" : "read_spamfilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'Spam Filter' object.",
                                          "method" : "PUT",
                                          "name" : "update_spamfilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "spamlevel" : {
                                                   "description" : "Spam Level",
                                                   "minimum" : 0,
                                                   "type" : "integer",
                                                   "typetext" : "<integer> (0 - N)"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/what/{ogroup}/spamfilter/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'Spam Filter' object.",
                                    "method" : "POST",
                                    "name" : "spamfilter",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "spamlevel" : {
                                             "description" : "Spam Level",
                                             "minimum" : 0,
                                             "type" : "integer",
                                             "typetext" : "<integer> (0 - N)"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/spamfilter",
                              "text" : "spamfilter"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'Archive Filter' object settings.",
                                          "method" : "GET",
                                          "name" : "read_archivefilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'Archive Filter' object.",
                                          "method" : "PUT",
                                          "name" : "update_archivefilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "contenttype" : {
                                                   "description" : "Content Type",
                                                   "maxLength" : 1024,
                                                   "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                                   "type" : "string"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/what/{ogroup}/archivefilter/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'Archive Filter' object.",
                                    "method" : "POST",
                                    "name" : "archivefilter",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "contenttype" : {
                                             "description" : "Content Type",
                                             "maxLength" : 1024,
                                             "pattern" : "[0-9a-zA-Z\\/\\\\[\\]\\+\\-\\.\\*\\_]+",
                                             "type" : "string"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/archivefilter",
                              "text" : "archivefilter"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'Match Filename' object settings.",
                                          "method" : "GET",
                                          "name" : "read_filenamefilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'Match Filename' object.",
                                          "method" : "PUT",
                                          "name" : "update_filenamefilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "filename" : {
                                                   "description" : "Filename filter",
                                                   "maxLength" : 1024,
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/what/{ogroup}/filenamefilter/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'Match Filename' object.",
                                    "method" : "POST",
                                    "name" : "filenamefilter",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "filename" : {
                                             "description" : "Filename filter",
                                             "maxLength" : 1024,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/filenamefilter",
                              "text" : "filenamefilter"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'Virus Filter' object settings.",
                                          "method" : "GET",
                                          "name" : "read_virusfilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'Virus Filter' object.",
                                          "method" : "PUT",
                                          "name" : "update_virusfilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/what/{ogroup}/virusfilter/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'Virus Filter' object.",
                                    "method" : "POST",
                                    "name" : "virusfilter",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/virusfilter",
                              "text" : "virusfilter"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'Match Archive Filename' object settings.",
                                          "method" : "GET",
                                          "name" : "read_archivefilenamefilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'Match Archive Filename' object.",
                                          "method" : "PUT",
                                          "name" : "update_archivefilenamefilter",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "filename" : {
                                                   "description" : "Filename filter",
                                                   "maxLength" : 1024,
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/what/{ogroup}/archivefilenamefilter/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'Match Archive Filename' object.",
                                    "method" : "POST",
                                    "name" : "archivefilenamefilter",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "filename" : {
                                             "description" : "Filename filter",
                                             "maxLength" : 1024,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/what/{ogroup}/archivefilenamefilter",
                              "text" : "archivefilenamefilter"
                           }
                        ],
                        "info" : {
                           "DELETE" : {
                              "allowtoken" : 1,
                              "description" : "Delete a 'what' group.",
                              "method" : "DELETE",
                              "name" : "delete_{$oclass}_group",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "ogroup" : {
                                       "description" : "Object Group ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Directory index.",
                              "method" : "GET",
                              "name" : "index",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "ogroup" : {
                                       "description" : "Object Group ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "subdir" : {
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{subdir}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/what/{ogroup}",
                        "text" : "{ogroup}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Get list of 'what' groups.",
                        "method" : "GET",
                        "name" : "list_what_groups",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "id" : {
                                    "type" : "integer"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Create a new 'what' group.",
                        "method" : "POST",
                        "name" : "create_what_group",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "info" : {
                                 "description" : "Informational comment.",
                                 "maxLength" : 255,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "name" : {
                                 "description" : "Group name.",
                                 "maxLength" : 255,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/ruledb/what",
                  "text" : "what"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Get 'when' group properties",
                                    "method" : "GET",
                                    "name" : "get_config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "integer"
                                          },
                                          "info" : {
                                             "type" : "string"
                                          },
                                          "name" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "allowtoken" : 1,
                                    "description" : "Modify 'when' group properties",
                                    "method" : "PUT",
                                    "name" : "set_config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Group name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/when/{ogroup}/config",
                              "text" : "config"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "allowtoken" : 1,
                                          "description" : "Remove an object from the 'when' group.",
                                          "method" : "DELETE",
                                          "name" : "delete_object",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Group ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/when/{ogroup}/objects/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "List 'when' group objects.",
                                    "method" : "GET",
                                    "name" : "objects",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "links" : [
                                          {
                                             "href" : "{id}",
                                             "rel" : "child"
                                          }
                                       ],
                                       "type" : "array"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/when/{ogroup}/objects",
                              "text" : "objects"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'TimeFrame' object settings.",
                                          "method" : "GET",
                                          "name" : "read_timeframe",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'TimeFrame' object.",
                                          "method" : "PUT",
                                          "name" : "update_timeframe",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "end" : {
                                                   "description" : "End time in `H:i` format (00:00).",
                                                   "pattern" : "\\d?\\d:\\d?\\d",
                                                   "type" : "string"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "start" : {
                                                   "description" : "Start time in `H:i` format (00:00).",
                                                   "pattern" : "\\d?\\d:\\d?\\d",
                                                   "type" : "string"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/when/{ogroup}/timeframe/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'TimeFrame' object.",
                                    "method" : "POST",
                                    "name" : "timeframe",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "end" : {
                                             "description" : "End time in `H:i` format (00:00).",
                                             "pattern" : "\\d?\\d:\\d?\\d",
                                             "type" : "string"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "start" : {
                                             "description" : "Start time in `H:i` format (00:00).",
                                             "pattern" : "\\d?\\d:\\d?\\d",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/when/{ogroup}/timeframe",
                              "text" : "timeframe"
                           }
                        ],
                        "info" : {
                           "DELETE" : {
                              "allowtoken" : 1,
                              "description" : "Delete a 'when' group.",
                              "method" : "DELETE",
                              "name" : "delete_{$oclass}_group",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "ogroup" : {
                                       "description" : "Object Group ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Directory index.",
                              "method" : "GET",
                              "name" : "index",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "ogroup" : {
                                       "description" : "Object Group ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "subdir" : {
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{subdir}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/when/{ogroup}",
                        "text" : "{ogroup}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Get list of 'when' groups.",
                        "method" : "GET",
                        "name" : "list_when_groups",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "id" : {
                                    "type" : "integer"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Create a new 'when' group.",
                        "method" : "POST",
                        "name" : "create_when_group",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "info" : {
                                 "description" : "Informational comment.",
                                 "maxLength" : 255,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "name" : {
                                 "description" : "Group name.",
                                 "maxLength" : 255,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/ruledb/when",
                  "text" : "when"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Get 'who' group properties",
                                    "method" : "GET",
                                    "name" : "get_config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "properties" : {
                                          "id" : {
                                             "type" : "integer"
                                          },
                                          "info" : {
                                             "type" : "string"
                                          },
                                          "name" : {
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "PUT" : {
                                    "allowtoken" : 1,
                                    "description" : "Modify 'who' group properties",
                                    "method" : "PUT",
                                    "name" : "set_config",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "info" : {
                                             "description" : "Informational comment.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "name" : {
                                             "description" : "Group name.",
                                             "maxLength" : 255,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ruledb/who/{ogroup}/config",
                              "text" : "config"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "allowtoken" : 1,
                                          "description" : "Remove an object from the 'who' group.",
                                          "method" : "DELETE",
                                          "name" : "delete_object",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Group ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/who/{ogroup}/objects/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "List 'who' group objects.",
                                    "method" : "GET",
                                    "name" : "objects",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Group ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "id" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "links" : [
                                          {
                                             "href" : "{id}",
                                             "rel" : "child"
                                          }
                                       ],
                                       "type" : "array"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/objects",
                              "text" : "objects"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'Mail address' object settings.",
                                          "method" : "GET",
                                          "name" : "read_email",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'Mail address' object.",
                                          "method" : "PUT",
                                          "name" : "update_email",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "email" : {
                                                   "description" : "Email address.",
                                                   "format" : "email",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/who/{ogroup}/email/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'Mail address' object.",
                                    "method" : "POST",
                                    "name" : "email",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "email" : {
                                             "description" : "Email address.",
                                             "format" : "email",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/email",
                              "text" : "email"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'Domain' object settings.",
                                          "method" : "GET",
                                          "name" : "read_domain",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'Domain' object.",
                                          "method" : "PUT",
                                          "name" : "update_domain",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "domain" : {
                                                   "description" : "DNS domain name (Sender).",
                                                   "format" : "dns-name",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/who/{ogroup}/domain/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'Domain' object.",
                                    "method" : "POST",
                                    "name" : "domain",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "domain" : {
                                             "description" : "DNS domain name (Sender).",
                                             "format" : "dns-name",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/domain",
                              "text" : "domain"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'Regular Expression' object settings.",
                                          "method" : "GET",
                                          "name" : "read_regex",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'Regular Expression' object.",
                                          "method" : "PUT",
                                          "name" : "update_regex",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "regex" : {
                                                   "description" : "Email address regular expression.",
                                                   "maxLength" : 1024,
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/who/{ogroup}/regex/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'Regular Expression' object.",
                                    "method" : "POST",
                                    "name" : "regex",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "regex" : {
                                             "description" : "Email address regular expression.",
                                             "maxLength" : 1024,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/regex",
                              "text" : "regex"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'IP Address' object settings.",
                                          "method" : "GET",
                                          "name" : "read_ip",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'IP Address' object.",
                                          "method" : "PUT",
                                          "name" : "update_ip",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ip" : {
                                                   "description" : "IP address",
                                                   "format" : "ip",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/who/{ogroup}/ip/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'IP Address' object.",
                                    "method" : "POST",
                                    "name" : "ip",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "ip" : {
                                             "description" : "IP address",
                                             "format" : "ip",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/ip",
                              "text" : "ip"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'IP Network' object settings.",
                                          "method" : "GET",
                                          "name" : "read_network",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'IP Network' object.",
                                          "method" : "PUT",
                                          "name" : "update_network",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "cidr" : {
                                                   "description" : "Network address in CIDR notation.",
                                                   "format" : "CIDR",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/who/{ogroup}/network/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'IP Network' object.",
                                    "method" : "POST",
                                    "name" : "network",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "cidr" : {
                                             "description" : "Network address in CIDR notation.",
                                             "format" : "CIDR",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/network",
                              "text" : "network"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'LDAP Group' object settings.",
                                          "method" : "GET",
                                          "name" : "read_ldap",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'LDAP Group' object.",
                                          "method" : "PUT",
                                          "name" : "update_ldap",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "group" : {
                                                   "description" : "LDAP Group DN",
                                                   "maxLength" : 1024,
                                                   "minLength" : 1,
                                                   "optional" : 1,
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "mode" : {
                                                   "description" : "Operational mode. You can either match 'any' user, match when no such user exists with 'none', or match when the user is member of a specific group.",
                                                   "enum" : [
                                                      "any",
                                                      "none",
                                                      "group"
                                                   ],
                                                   "type" : "string"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "profile" : {
                                                   "description" : "Profile ID.",
                                                   "format" : "pve-configid",
                                                   "optional" : 1,
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/who/{ogroup}/ldap/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'LDAP Group' object.",
                                    "method" : "POST",
                                    "name" : "ldap",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "group" : {
                                             "description" : "LDAP Group DN",
                                             "maxLength" : 1024,
                                             "minLength" : 1,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "mode" : {
                                             "description" : "Operational mode. You can either match 'any' user, match when no such user exists with 'none', or match when the user is member of a specific group.",
                                             "enum" : [
                                                "any",
                                                "none",
                                                "group"
                                             ],
                                             "type" : "string"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "profile" : {
                                             "description" : "Profile ID.",
                                             "format" : "pve-configid",
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/ldap",
                              "text" : "ldap"
                           },
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Read 'LDAP User' object settings.",
                                          "method" : "GET",
                                          "name" : "read_ldapuser",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "proxyto" : "master",
                                          "returns" : {
                                             "properties" : {
                                                "id" : {
                                                   "type" : "integer"
                                                }
                                             },
                                             "type" : "object"
                                          }
                                       },
                                       "PUT" : {
                                          "allowtoken" : 1,
                                          "description" : "Update 'LDAP User' object.",
                                          "method" : "PUT",
                                          "name" : "update_ldapuser",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "account" : {
                                                   "description" : "LDAP user account name.",
                                                   "maxLength" : 1024,
                                                   "minLength" : 1,
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "id" : {
                                                   "description" : "Object ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "ogroup" : {
                                                   "description" : "Object Groups ID.",
                                                   "type" : "integer",
                                                   "typetext" : "<integer>"
                                                },
                                                "profile" : {
                                                   "description" : "Profile ID.",
                                                   "format" : "pve-configid",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "master",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/config/ruledb/who/{ogroup}/ldapuser/{id}",
                                    "text" : "{id}"
                                 }
                              ],
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Add 'LDAP User' object.",
                                    "method" : "POST",
                                    "name" : "ldapuser",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "account" : {
                                             "description" : "LDAP user account name.",
                                             "maxLength" : 1024,
                                             "minLength" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "ogroup" : {
                                             "description" : "Object Groups ID.",
                                             "type" : "integer",
                                             "typetext" : "<integer>"
                                          },
                                          "profile" : {
                                             "description" : "Profile ID.",
                                             "format" : "pve-configid",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "description" : "The object ID.",
                                       "type" : "integer"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/config/ruledb/who/{ogroup}/ldapuser",
                              "text" : "ldapuser"
                           }
                        ],
                        "info" : {
                           "DELETE" : {
                              "allowtoken" : 1,
                              "description" : "Delete a 'who' group.",
                              "method" : "DELETE",
                              "name" : "delete_{$oclass}_group",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "ogroup" : {
                                       "description" : "Object Group ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Directory index.",
                              "method" : "GET",
                              "name" : "index",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "ogroup" : {
                                       "description" : "Object Group ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "subdir" : {
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{subdir}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ruledb/who/{ogroup}",
                        "text" : "{ogroup}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Get list of 'who' groups.",
                        "method" : "GET",
                        "name" : "list_who_groups",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "id" : {
                                    "type" : "integer"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Create a new 'who' group.",
                        "method" : "POST",
                        "name" : "create_who_group",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "info" : {
                                 "description" : "Informational comment.",
                                 "maxLength" : 255,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "name" : {
                                 "description" : "Group name.",
                                 "maxLength" : 255,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/ruledb/who",
                  "text" : "who"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Directory index.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {},
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{name}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Reset PMG rule database back to factory defaults.",
                  "method" : "POST",
                  "name" : "reset_ruledb",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/ruledb",
            "text" : "ruledb"
         },
         {
            "children" : [
               {
                  "children" : [
                     {
                        "info" : {
                           "DELETE" : {
                              "allowtoken" : 1,
                              "description" : "Remove an object from the SMTP whitelist.",
                              "method" : "DELETE",
                              "name" : "delete_object",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/whitelist/objects/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Get list of all SMTP whitelist entries.",
                        "method" : "GET",
                        "name" : "objects",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "id" : {
                                    "type" : "integer"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{id}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/objects",
                  "text" : "objects"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Read 'Mail address' object settings.",
                              "method" : "GET",
                              "name" : "read_email",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "allowtoken" : 1,
                              "description" : "Update 'Mail address' object.",
                              "method" : "PUT",
                              "name" : "update_email",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "email" : {
                                       "description" : "Email address.",
                                       "format" : "email",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/whitelist/email/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Add 'Mail address' object.",
                        "method" : "POST",
                        "name" : "email",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "email" : {
                                 "description" : "Email address.",
                                 "format" : "email",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/email",
                  "text" : "email"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Read 'Mail address' object settings.",
                              "method" : "GET",
                              "name" : "read_receiver",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "allowtoken" : 1,
                              "description" : "Update 'Mail address' object.",
                              "method" : "PUT",
                              "name" : "update_receiver",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "email" : {
                                       "description" : "Email address.",
                                       "format" : "email",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/whitelist/receiver/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Add 'Mail address' object.",
                        "method" : "POST",
                        "name" : "receiver",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "email" : {
                                 "description" : "Email address.",
                                 "format" : "email",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/receiver",
                  "text" : "receiver"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Read 'Domain' object settings.",
                              "method" : "GET",
                              "name" : "read_domain",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "allowtoken" : 1,
                              "description" : "Update 'Domain' object.",
                              "method" : "PUT",
                              "name" : "update_domain",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "domain" : {
                                       "description" : "DNS domain name (Sender).",
                                       "format" : "dns-name",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/whitelist/domain/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Add 'Domain' object.",
                        "method" : "POST",
                        "name" : "domain",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "domain" : {
                                 "description" : "DNS domain name (Sender).",
                                 "format" : "dns-name",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/domain",
                  "text" : "domain"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Read 'Domain' object settings.",
                              "method" : "GET",
                              "name" : "read_receiver_domain",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "allowtoken" : 1,
                              "description" : "Update 'Domain' object.",
                              "method" : "PUT",
                              "name" : "update_receiver_domain",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "domain" : {
                                       "description" : "DNS domain name (Sender).",
                                       "format" : "dns-name",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/whitelist/receiver_domain/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Add 'Domain' object.",
                        "method" : "POST",
                        "name" : "receiver_domain",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "domain" : {
                                 "description" : "DNS domain name (Sender).",
                                 "format" : "dns-name",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/receiver_domain",
                  "text" : "receiver_domain"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Read 'Regular Expression' object settings.",
                              "method" : "GET",
                              "name" : "read_regex",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "allowtoken" : 1,
                              "description" : "Update 'Regular Expression' object.",
                              "method" : "PUT",
                              "name" : "update_regex",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    },
                                    "regex" : {
                                       "description" : "Email address regular expression.",
                                       "maxLength" : 1024,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/whitelist/regex/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Add 'Regular Expression' object.",
                        "method" : "POST",
                        "name" : "regex",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "regex" : {
                                 "description" : "Email address regular expression.",
                                 "maxLength" : 1024,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/regex",
                  "text" : "regex"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Read 'Regular Expression' object settings.",
                              "method" : "GET",
                              "name" : "read_receiver_regex",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "allowtoken" : 1,
                              "description" : "Update 'Regular Expression' object.",
                              "method" : "PUT",
                              "name" : "update_receiver_regex",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    },
                                    "regex" : {
                                       "description" : "Email address regular expression.",
                                       "maxLength" : 1024,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/whitelist/receiver_regex/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Add 'Regular Expression' object.",
                        "method" : "POST",
                        "name" : "receiver_regex",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "regex" : {
                                 "description" : "Email address regular expression.",
                                 "maxLength" : 1024,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/receiver_regex",
                  "text" : "receiver_regex"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Read 'IP Address' object settings.",
                              "method" : "GET",
                              "name" : "read_ip",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "allowtoken" : 1,
                              "description" : "Update 'IP Address' object.",
                              "method" : "PUT",
                              "name" : "update_ip",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    },
                                    "ip" : {
                                       "description" : "IP address",
                                       "format" : "ip",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/whitelist/ip/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Add 'IP Address' object.",
                        "method" : "POST",
                        "name" : "ip",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "ip" : {
                                 "description" : "IP address",
                                 "format" : "ip",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/ip",
                  "text" : "ip"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Read 'IP Network' object settings.",
                              "method" : "GET",
                              "name" : "read_network",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "id" : {
                                       "type" : "integer"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "allowtoken" : 1,
                              "description" : "Update 'IP Network' object.",
                              "method" : "PUT",
                              "name" : "update_network",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "cidr" : {
                                       "description" : "Network address in CIDR notation.",
                                       "format" : "CIDR",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "id" : {
                                       "description" : "Object ID.",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/whitelist/network/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Add 'IP Network' object.",
                        "method" : "POST",
                        "name" : "network",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "cidr" : {
                                 "description" : "Network address in CIDR notation.",
                                 "format" : "CIDR",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "The object ID.",
                           "type" : "integer"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/whitelist/network",
                  "text" : "network"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Directory index.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "subdir" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{subdir}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/whitelist",
            "text" : "whitelist"
         },
         {
            "children" : [
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Get LDAP profile configuration.",
                              "method" : "GET",
                              "name" : "read_config",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "profile" : {
                                       "description" : "Profile ID.",
                                       "format" : "pve-configid",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "master",
                              "returns" : {}
                           },
                           "PUT" : {
                              "allowtoken" : 1,
                              "description" : "Update LDAP profile settings.",
                              "method" : "PUT",
                              "name" : "update_config",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "accountattr" : {
                                       "default" : "sAMAccountName, uid",
                                       "description" : "Account attribute name name.",
                                       "format" : "ldap-simple-attr-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "basedn" : {
                                       "description" : "Base domain name.",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "binddn" : {
                                       "description" : "Bind domain name.",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "bindpw" : {
                                       "description" : "Bind password.",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "cafile" : {
                                       "description" : "Path to CA file. Only useful with option 'verify'",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "comment" : {
                                       "description" : "Description.",
                                       "maxLength" : 4096,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "delete" : {
                                       "description" : "A list of settings you want to delete.",
                                       "format" : "pve-configid-list",
                                       "maxLength" : 4096,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "digest" : {
                                       "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                                       "maxLength" : 40,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "disable" : {
                                       "description" : "Flag to disable/deactivate the entry.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "filter" : {
                                       "description" : "LDAP filter.",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "groupbasedn" : {
                                       "description" : "Base domain name for groups.",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "groupclass" : {
                                       "default" : "group, univentionGroup, ipausergroup",
                                       "description" : "List of objectclasses for groups.",
                                       "format" : "ldap-simple-attr-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "mailattr" : {
                                       "default" : "mail, userPrincipalName, proxyAddresses, othermailbox, mailAlternativeAddress",
                                       "description" : "List of mail attribute names.",
                                       "format" : "ldap-simple-attr-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "mode" : {
                                       "default" : "ldap",
                                       "description" : "LDAP protocol mode ('ldap', 'ldaps' or 'ldap+starttls').",
                                       "enum" : [
                                          "ldap",
                                          "ldaps",
                                          "ldap+starttls"
                                       ],
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "port" : {
                                       "description" : "Specify the port to connect to.",
                                       "maximum" : 65535,
                                       "minimum" : 1,
                                       "optional" : 1,
                                       "type" : "integer",
                                       "typetext" : "<integer> (1 - 65535)"
                                    },
                                    "profile" : {
                                       "description" : "Profile ID.",
                                       "format" : "pve-configid",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "server1" : {
                                       "description" : "Server address.",
                                       "format" : "address",
                                       "maxLength" : 256,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "server2" : {
                                       "description" : "Fallback server address. Userd when the first server is not available.",
                                       "format" : "address",
                                       "maxLength" : 256,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "verify" : {
                                       "default" : 0,
                                       "description" : "Verify server certificate. Only useful with ldaps or ldap+starttls.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    }
                                 },
                                 "type" : "object"
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/ldap/{profile}/config",
                        "text" : "config"
                     },
                     {
                        "info" : {
                           "POST" : {
                              "allowtoken" : 1,
                              "description" : "Synchronice LDAP users to local database.",
                              "method" : "POST",
                              "name" : "sync_profile",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "profile" : {
                                       "description" : "Profile ID.",
                                       "format" : "pve-configid",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/ldap/{profile}/sync",
                        "text" : "sync"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Get all email addresses for the specified user.",
                                    "method" : "GET",
                                    "name" : "address_list",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "email" : {
                                             "description" : "Email address.",
                                             "format" : "email",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "profile" : {
                                             "description" : "Profile ID.",
                                             "format" : "pve-configid",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "email" : {
                                                "type" : "string"
                                             },
                                             "primary" : {
                                                "type" : "boolean"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ldap/{profile}/users/{email}",
                              "text" : "{email}"
                           }
                        ],
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "List LDAP users.",
                              "method" : "GET",
                              "name" : "profile_list_users",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "profile" : {
                                       "description" : "Profile ID.",
                                       "format" : "pve-configid",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "account" : {
                                          "type" : "string"
                                       },
                                       "dn" : {
                                          "type" : "string"
                                       },
                                       "pmail" : {
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{pmail}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ldap/{profile}/users",
                        "text" : "users"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "List LDAP group members.",
                                    "method" : "GET",
                                    "name" : "profile_list_group_members",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "gid" : {
                                             "description" : "Group ID",
                                             "type" : "number",
                                             "typetext" : "<number>"
                                          },
                                          "profile" : {
                                             "description" : "Profile ID.",
                                             "format" : "pve-configid",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "master",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "account" : {
                                                "type" : "string"
                                             },
                                             "dn" : {
                                                "type" : "string"
                                             },
                                             "pmail" : {
                                                "type" : "string"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/config/ldap/{profile}/groups/{gid}",
                              "text" : "{gid}"
                           }
                        ],
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "List LDAP groups.",
                              "method" : "GET",
                              "name" : "profile_list_groups",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "profile" : {
                                       "description" : "Profile ID.",
                                       "format" : "pve-configid",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "dn" : {
                                          "type" : "string"
                                       },
                                       "gid" : {
                                          "type" : "number"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{gid}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/config/ldap/{profile}/groups",
                        "text" : "groups"
                     }
                  ],
                  "info" : {
                     "DELETE" : {
                        "allowtoken" : 1,
                        "description" : "Delete an LDAP profile",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "profile" : {
                                 "description" : "Profile ID.",
                                 "format" : "pve-configid",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Directory index",
                        "method" : "GET",
                        "name" : "profile_index",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "profile" : {
                                 "description" : "Profile ID.",
                                 "format" : "pve-configid",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "user" : "all"
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "subdir" : {
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{subdir}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/ldap/{profile}",
                  "text" : "{profile}"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "List configured LDAP profiles.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "comment" : {
                              "optional" : 1,
                              "type" : "string"
                           },
                           "disable" : {
                              "type" : "boolean"
                           },
                           "gcount" : {
                              "optional" : 1,
                              "type" : "integer"
                           },
                           "mcount" : {
                              "optional" : 1,
                              "type" : "integer"
                           },
                           "mode" : {
                              "type" : "string"
                           },
                           "profile" : {
                              "type" : "string"
                           },
                           "server1" : {
                              "type" : "string"
                           },
                           "server2" : {
                              "optional" : 1,
                              "type" : "string"
                           },
                           "ucount" : {
                              "optional" : 1,
                              "type" : "integer"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{profile}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Add LDAP profile.",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "accountattr" : {
                           "default" : "sAMAccountName, uid",
                           "description" : "Account attribute name name.",
                           "format" : "ldap-simple-attr-list",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "basedn" : {
                           "description" : "Base domain name.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "binddn" : {
                           "description" : "Bind domain name.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "bindpw" : {
                           "description" : "Bind password.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "cafile" : {
                           "description" : "Path to CA file. Only useful with option 'verify'",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "comment" : {
                           "description" : "Description.",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "disable" : {
                           "description" : "Flag to disable/deactivate the entry.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "filter" : {
                           "description" : "LDAP filter.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "groupbasedn" : {
                           "description" : "Base domain name for groups.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "groupclass" : {
                           "default" : "group, univentionGroup, ipausergroup",
                           "description" : "List of objectclasses for groups.",
                           "format" : "ldap-simple-attr-list",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "mailattr" : {
                           "default" : "mail, userPrincipalName, proxyAddresses, othermailbox, mailAlternativeAddress",
                           "description" : "List of mail attribute names.",
                           "format" : "ldap-simple-attr-list",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "mode" : {
                           "default" : "ldap",
                           "description" : "LDAP protocol mode ('ldap', 'ldaps' or 'ldap+starttls').",
                           "enum" : [
                              "ldap",
                              "ldaps",
                              "ldap+starttls"
                           ],
                           "optional" : 1,
                           "type" : "string"
                        },
                        "port" : {
                           "description" : "Specify the port to connect to.",
                           "maximum" : 65535,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 65535)"
                        },
                        "profile" : {
                           "description" : "Profile ID.",
                           "format" : "pve-configid",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "server1" : {
                           "description" : "Server address.",
                           "format" : "address",
                           "maxLength" : 256,
                           "optional" : 0,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "server2" : {
                           "description" : "Fallback server address. Userd when the first server is not available.",
                           "format" : "address",
                           "maxLength" : 256,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "verify" : {
                           "default" : 0,
                           "description" : "Verify server certificate. Only useful with ldaps or ldap+starttls.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        }
                     },
                     "type" : "object"
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/ldap",
            "text" : "ldap"
         },
         {
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "allowtoken" : 1,
                        "description" : "Delete a relay domain",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "domain" : {
                                 "description" : "Domain name.",
                                 "format" : "transport-domain",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read Domain data (comment).",
                        "method" : "GET",
                        "name" : "read",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "domain" : {
                                 "description" : "Domain name.",
                                 "format" : "transport-domain",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "properties" : {
                              "comment" : {
                                 "type" : "string"
                              },
                              "domain" : {
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "allowtoken" : 1,
                        "description" : "Update relay domain data (comment).",
                        "method" : "PUT",
                        "name" : "write",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "comment" : {
                                 "description" : "Comment.",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "domain" : {
                                 "description" : "Domain name.",
                                 "format" : "transport-domain",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/domains/{domain}",
                  "text" : "{domain}"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "List relay domains.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "comment" : {
                              "type" : "string"
                           },
                           "domain" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{domain}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Add relay domain.",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "comment" : {
                           "description" : "Comment.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "domain" : {
                           "description" : "Domain name.",
                           "format" : "transport-domain",
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/domains",
            "text" : "domains"
         },
         {
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "allowtoken" : 1,
                        "description" : "Delete a fetchmail configuration entry.",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "id" : {
                                 "description" : "Unique ID",
                                 "maxLength" : 16,
                                 "pattern" : "[A-Za-z0-9]+",
                                 "type" : "string"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read fetchmail user configuration.",
                        "method" : "GET",
                        "name" : "read",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "id" : {
                                 "description" : "Unique ID",
                                 "maxLength" : 16,
                                 "pattern" : "[A-Za-z0-9]+",
                                 "type" : "string"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "properties" : {
                              "enable" : {
                                 "default" : 0,
                                 "description" : "Flag to enable or disable polling.",
                                 "optional" : 1,
                                 "type" : "boolean"
                              },
                              "id" : {
                                 "description" : "Unique ID",
                                 "maxLength" : 16,
                                 "pattern" : "[A-Za-z0-9]+",
                                 "type" : "string"
                              },
                              "interval" : {
                                 "description" : "Only check this site every <interval> poll cycles. A poll cycle is 5 minutes.",
                                 "maximum" : 2016,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer"
                              },
                              "keep" : {
                                 "default" : 0,
                                 "description" : "Keep retrieved messages on the remote mailserver.",
                                 "optional" : 1,
                                 "type" : "boolean"
                              },
                              "pass" : {
                                 "description" : "The password used tfor server login.",
                                 "maxLength" : 64,
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "port" : {
                                 "description" : "Port number.",
                                 "maximum" : 65535,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer"
                              },
                              "protocol" : {
                                 "description" : "Specify  the  protocol to use when communicating with the remote mailserver",
                                 "enum" : [
                                    "pop3",
                                    "imap"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "server" : {
                                 "description" : "Server address (IP or DNS name).",
                                 "format" : "address",
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "ssl" : {
                                 "default" : 0,
                                 "description" : "Use SSL.",
                                 "optional" : 1,
                                 "type" : "boolean"
                              },
                              "target" : {
                                 "description" : "The target email address (where to deliver fetched mails).",
                                 "maxLength" : 512,
                                 "minLength" : 3,
                                 "optional" : 1,
                                 "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                                 "type" : "string"
                              },
                              "user" : {
                                 "description" : "The user identification to be used when logging in to the server",
                                 "maxLength" : 64,
                                 "minLength" : 1,
                                 "optional" : 1,
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "allowtoken" : 1,
                        "description" : "Update fetchmail user configuration.",
                        "method" : "PUT",
                        "name" : "write",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "enable" : {
                                 "default" : 0,
                                 "description" : "Flag to enable or disable polling.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "id" : {
                                 "description" : "Unique ID",
                                 "maxLength" : 16,
                                 "pattern" : "[A-Za-z0-9]+",
                                 "type" : "string"
                              },
                              "interval" : {
                                 "description" : "Only check this site every <interval> poll cycles. A poll cycle is 5 minutes.",
                                 "maximum" : 2016,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 2016)"
                              },
                              "keep" : {
                                 "default" : 0,
                                 "description" : "Keep retrieved messages on the remote mailserver.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "pass" : {
                                 "description" : "The password used tfor server login.",
                                 "maxLength" : 64,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "port" : {
                                 "description" : "Port number.",
                                 "maximum" : 65535,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 65535)"
                              },
                              "protocol" : {
                                 "description" : "Specify  the  protocol to use when communicating with the remote mailserver",
                                 "enum" : [
                                    "pop3",
                                    "imap"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "server" : {
                                 "description" : "Server address (IP or DNS name).",
                                 "format" : "address",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "ssl" : {
                                 "default" : 0,
                                 "description" : "Use SSL.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "target" : {
                                 "description" : "The target email address (where to deliver fetched mails).",
                                 "maxLength" : 512,
                                 "minLength" : 3,
                                 "optional" : 1,
                                 "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                                 "type" : "string"
                              },
                              "user" : {
                                 "description" : "The user identification to be used when logging in to the server",
                                 "maxLength" : 64,
                                 "minLength" : 1,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/fetchmail/{id}",
                  "text" : "{id}"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "List fetchmail users.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "enable" : {
                              "default" : 0,
                              "description" : "Flag to enable or disable polling.",
                              "optional" : 1,
                              "type" : "boolean"
                           },
                           "id" : {
                              "description" : "Unique ID",
                              "maxLength" : 16,
                              "pattern" : "[A-Za-z0-9]+",
                              "type" : "string"
                           },
                           "interval" : {
                              "description" : "Only check this site every <interval> poll cycles. A poll cycle is 5 minutes.",
                              "maximum" : 2016,
                              "minimum" : 1,
                              "optional" : 1,
                              "type" : "integer"
                           },
                           "keep" : {
                              "default" : 0,
                              "description" : "Keep retrieved messages on the remote mailserver.",
                              "optional" : 1,
                              "type" : "boolean"
                           },
                           "pass" : {
                              "description" : "The password used tfor server login.",
                              "maxLength" : 64,
                              "optional" : 1,
                              "type" : "string"
                           },
                           "port" : {
                              "description" : "Port number.",
                              "maximum" : 65535,
                              "minimum" : 1,
                              "optional" : 1,
                              "type" : "integer"
                           },
                           "protocol" : {
                              "description" : "Specify  the  protocol to use when communicating with the remote mailserver",
                              "enum" : [
                                 "pop3",
                                 "imap"
                              ],
                              "optional" : 1,
                              "type" : "string"
                           },
                           "server" : {
                              "description" : "Server address (IP or DNS name).",
                              "format" : "address",
                              "optional" : 1,
                              "type" : "string"
                           },
                           "ssl" : {
                              "default" : 0,
                              "description" : "Use SSL.",
                              "optional" : 1,
                              "type" : "boolean"
                           },
                           "target" : {
                              "description" : "The target email address (where to deliver fetched mails).",
                              "maxLength" : 512,
                              "minLength" : 3,
                              "optional" : 1,
                              "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                              "type" : "string"
                           },
                           "user" : {
                              "description" : "The user identification to be used when logging in to the server",
                              "maxLength" : 64,
                              "minLength" : 1,
                              "optional" : 1,
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{id}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Create fetchmail user configuration.",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "enable" : {
                           "default" : 0,
                           "description" : "Flag to enable or disable polling.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "interval" : {
                           "description" : "Only check this site every <interval> poll cycles. A poll cycle is 5 minutes.",
                           "maximum" : 2016,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 2016)"
                        },
                        "keep" : {
                           "default" : 0,
                           "description" : "Keep retrieved messages on the remote mailserver.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "pass" : {
                           "description" : "The password used tfor server login.",
                           "maxLength" : 64,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "port" : {
                           "description" : "Port number.",
                           "maximum" : 65535,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 65535)"
                        },
                        "protocol" : {
                           "description" : "Specify  the  protocol to use when communicating with the remote mailserver",
                           "enum" : [
                              "pop3",
                              "imap"
                           ],
                           "type" : "string"
                        },
                        "server" : {
                           "description" : "Server address (IP or DNS name).",
                           "format" : "address",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "ssl" : {
                           "default" : 0,
                           "description" : "Use SSL.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "target" : {
                           "description" : "The target email address (where to deliver fetched mails).",
                           "maxLength" : 512,
                           "minLength" : 3,
                           "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                           "type" : "string"
                        },
                        "user" : {
                           "description" : "The user identification to be used when logging in to the server",
                           "maxLength" : 64,
                           "minLength" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "description" : "Unique ID",
                     "maxLength" : 16,
                     "pattern" : "[A-Za-z0-9]+",
                     "type" : "string"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/fetchmail",
            "text" : "fetchmail"
         },
         {
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "allowtoken" : 1,
                        "description" : "Delete a transport map entry",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "domain" : {
                                 "description" : "Domain name.",
                                 "format" : "transport-domain-or-email",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read transport map entry.",
                        "method" : "GET",
                        "name" : "read",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "domain" : {
                                 "description" : "Domain name.",
                                 "format" : "transport-domain-or-email",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "properties" : {
                              "comment" : {
                                 "type" : "string"
                              },
                              "domain" : {
                                 "type" : "string"
                              },
                              "host" : {
                                 "type" : "string"
                              },
                              "port" : {
                                 "type" : "integer"
                              },
                              "protocol" : {
                                 "type" : "string"
                              },
                              "use_mx" : {
                                 "type" : "boolean"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "allowtoken" : 1,
                        "description" : "Update transport map entry.",
                        "method" : "PUT",
                        "name" : "write",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "comment" : {
                                 "description" : "Comment.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "domain" : {
                                 "description" : "Domain name.",
                                 "format" : "transport-domain-or-email",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "host" : {
                                 "description" : "Target host (name or IP address).",
                                 "format" : "transport-address",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "port" : {
                                 "description" : "Transport port.",
                                 "maximum" : 65535,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 65535)"
                              },
                              "protocol" : {
                                 "default" : "smtp",
                                 "description" : "Transport protocol.",
                                 "enum" : [
                                    "smtp",
                                    "lmtp"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "use_mx" : {
                                 "description" : "Enable MX lookups (SMTP).",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/transport/{domain}",
                  "text" : "{domain}"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "List transport map entries.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "comment" : {
                              "type" : "string"
                           },
                           "domain" : {
                              "type" : "string"
                           },
                           "host" : {
                              "type" : "string"
                           },
                           "port" : {
                              "type" : "integer"
                           },
                           "protocol" : {
                              "type" : "string"
                           },
                           "use_mx" : {
                              "type" : "boolean"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{domain}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Add transport map entry.",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "comment" : {
                           "description" : "Comment.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "domain" : {
                           "description" : "Domain name.",
                           "format" : "transport-domain-or-email",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "host" : {
                           "description" : "Target host (name or IP address).",
                           "format" : "transport-address",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "port" : {
                           "default" : 25,
                           "description" : "Transport port.",
                           "maximum" : 65535,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 65535)"
                        },
                        "protocol" : {
                           "default" : "smtp",
                           "description" : "Transport protocol.",
                           "enum" : [
                              "smtp",
                              "lmtp"
                           ],
                           "optional" : 1,
                           "type" : "string"
                        },
                        "use_mx" : {
                           "default" : 1,
                           "description" : "Enable MX lookups (SMTP).",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/transport",
            "text" : "transport"
         },
         {
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "allowtoken" : 1,
                        "description" : "Delete a truster network",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "cidr" : {
                                 "description" : "IPv4 or IPv6 network in CIDR notation.",
                                 "format" : "CIDR",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read trusted network data (comment).",
                        "method" : "GET",
                        "name" : "read",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "cidr" : {
                                 "description" : "IPv4 or IPv6 network in CIDR notation.",
                                 "format" : "CIDR",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "properties" : {
                              "cidr" : {
                                 "type" : "string"
                              },
                              "comment" : {
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "allowtoken" : 1,
                        "description" : "Update trusted data (comment).",
                        "method" : "PUT",
                        "name" : "write",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "cidr" : {
                                 "description" : "IPv4 or IPv6 network in CIDR notation.",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "comment" : {
                                 "description" : "Comment.",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/mynetworks/{cidr}",
                  "text" : "{cidr}"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "List of trusted networks from where SMTP clients are allowed to relay mail through Proxmox Mail Gateway.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "cidr" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{cidr}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Add a trusted network.",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "cidr" : {
                           "description" : "IPv4 or IPv6 network in CIDR notation.",
                           "format" : "CIDR",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "comment" : {
                           "description" : "Comment.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/mynetworks",
            "text" : "mynetworks"
         },
         {
            "children" : [
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Cluster node index.",
                        "method" : "GET",
                        "name" : "nodes",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "qmanager",
                              "audit"
                           ]
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "cid" : {
                                    "type" : "integer"
                                 },
                                 "fingerprint" : {
                                    "type" : "string"
                                 },
                                 "hostrsapubkey" : {
                                    "type" : "string"
                                 },
                                 "ip" : {
                                    "type" : "string"
                                 },
                                 "name" : {
                                    "type" : "string"
                                 },
                                 "rootrsapubkey" : {
                                    "type" : "string"
                                 },
                                 "type" : {
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Add an node to the cluster config.",
                        "method" : "POST",
                        "name" : "add_node",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "fingerprint" : {
                                 "description" : "SSL certificate fingerprint.",
                                 "optional" : 0,
                                 "pattern" : "^(:?[A-Z0-9][A-Z0-9]:){31}[A-Z0-9][A-Z0-9]$",
                                 "type" : "string"
                              },
                              "hostrsapubkey" : {
                                 "description" : "Public SSH RSA key for the host.",
                                 "optional" : 0,
                                 "pattern" : "^[A-Za-z0-9\\.\\/\\+=]{200,}$",
                                 "type" : "string"
                              },
                              "ip" : {
                                 "description" : "IP address.",
                                 "format" : "ip",
                                 "optional" : 0,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "maxcid" : {
                                 "description" : "Maximum used cluster node ID (used internally, do not modify).",
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - N)"
                              },
                              "name" : {
                                 "description" : "Node name.",
                                 "format" : "pve-node",
                                 "optional" : 0,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "rootrsapubkey" : {
                                 "description" : "Public SSH RSA key for the root user.",
                                 "optional" : 0,
                                 "pattern" : "^[A-Za-z0-9\\.\\/\\+=]{200,}$",
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "Returns the resulting node list.",
                           "items" : {
                              "properties" : {
                                 "cid" : {
                                    "type" : "integer"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/cluster/nodes",
                  "text" : "nodes"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Cluster node status.",
                        "method" : "GET",
                        "name" : "status",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "list_single_node" : {
                                 "default" : 0,
                                 "description" : "List local node if there is no cluster defined. Please note that RSA keys and fingerprint are not valid in that case.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "qmanager",
                              "audit"
                           ]
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "cid" : {
                                    "type" : "integer"
                                 },
                                 "fingerprint" : {
                                    "type" : "string"
                                 },
                                 "hostrsapubkey" : {
                                    "type" : "string"
                                 },
                                 "ip" : {
                                    "type" : "string"
                                 },
                                 "name" : {
                                    "type" : "string"
                                 },
                                 "rootrsapubkey" : {
                                    "type" : "string"
                                 },
                                 "type" : {
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{cid}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/cluster/status",
                  "text" : "status"
               },
               {
                  "info" : {
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Create initial cluster config with current node as master.",
                        "method" : "POST",
                        "name" : "create",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "protected" : 1,
                        "returns" : {
                           "type" : "string"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/cluster/create",
                  "text" : "create"
               },
               {
                  "info" : {
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Join local node to an existing cluster.",
                        "method" : "POST",
                        "name" : "join",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "fingerprint" : {
                                 "description" : "SSL certificate fingerprint.",
                                 "pattern" : "^(:?[A-Z0-9][A-Z0-9]:){31}[A-Z0-9][A-Z0-9]$",
                                 "type" : "string"
                              },
                              "master_ip" : {
                                 "description" : "IP address.",
                                 "format" : "ip",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "password" : {
                                 "description" : "Superuser password.",
                                 "maxLength" : 128,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "returns" : {
                           "type" : "string"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/cluster/join",
                  "text" : "join"
               },
               {
                  "info" : {
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Update API certificate fingerprints (by fetching it via ssh).",
                        "method" : "POST",
                        "name" : "update_fingerprints",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/cluster/update-fingerprints",
                  "text" : "update-fingerprints"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Directory index.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "user" : "all"
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {},
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{name}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/cluster",
            "text" : "cluster"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Get Mime Types List",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "mimetype" : {
                              "type" : "string"
                           },
                           "text" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/mimetypes",
            "text" : "mimetypes"
         },
         {
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "allowtoken" : 1,
                        "description" : "Delete a tls_policy entry",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "destination" : {
                                 "description" : "Destination (Domain or next-hop).",
                                 "format" : "transport-domain-or-nexthop",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read tls_policy entry.",
                        "method" : "GET",
                        "name" : "read",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "destination" : {
                                 "description" : "Destination (Domain or next-hop).",
                                 "format" : "transport-domain-or-nexthop",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "properties" : {
                              "destination" : {
                                 "format" : "transport-domain-or-nexthop",
                                 "type" : "string"
                              },
                              "policy" : {
                                 "format" : "tls-policy",
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "allowtoken" : 1,
                        "description" : "Update tls_policy entry.",
                        "method" : "PUT",
                        "name" : "write",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "destination" : {
                                 "description" : "Destination (Domain or next-hop).",
                                 "format" : "transport-domain-or-nexthop",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "policy" : {
                                 "description" : "TLS policy",
                                 "format" : "tls-policy-strict",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/tlspolicy/{destination}",
                  "text" : "{destination}"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "List tls_policy entries.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "destination" : {
                              "format" : "transport-domain-or-nexthop",
                              "type" : "string"
                           },
                           "policy" : {
                              "format" : "tls-policy",
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{destination}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Add tls_policy entry.",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "destination" : {
                           "description" : "Destination (Domain or next-hop).",
                           "format" : "transport-domain-or-nexthop",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "policy" : {
                           "description" : "TLS policy",
                           "format" : "tls-policy-strict",
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/tlspolicy",
            "text" : "tlspolicy"
         },
         {
            "children" : [
               {
                  "children" : [
                     {
                        "info" : {
                           "DELETE" : {
                              "allowtoken" : 1,
                              "description" : "Delete a DKIM-sign domain",
                              "method" : "DELETE",
                              "name" : "delete",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "domain" : {
                                       "description" : "Domain name.",
                                       "format" : "transport-domain",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Read Domain data (comment).",
                              "method" : "GET",
                              "name" : "read",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "domain" : {
                                       "description" : "Domain name.",
                                       "format" : "transport-domain",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "master",
                              "returns" : {
                                 "properties" : {
                                    "comment" : {
                                       "type" : "string"
                                    },
                                    "domain" : {
                                       "type" : "string"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "allowtoken" : 1,
                              "description" : "Update DKIM-sign domain data (comment).",
                              "method" : "PUT",
                              "name" : "write",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "comment" : {
                                       "description" : "Comment.",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "domain" : {
                                       "description" : "Domain name.",
                                       "format" : "transport-domain",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/dkim/domains/{domain}",
                        "text" : "{domain}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "List DKIM-sign domains.",
                        "method" : "GET",
                        "name" : "index",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "comment" : {
                                    "type" : "string"
                                 },
                                 "domain" : {
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{domain}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Add DKIM-sign domain.",
                        "method" : "POST",
                        "name" : "create",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "comment" : {
                                 "description" : "Comment.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "domain" : {
                                 "description" : "Domain name.",
                                 "format" : "transport-domain",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/dkim/domains",
                  "text" : "domains"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Get the public key for the configured selector, prepared as DKIM TXT record",
                        "method" : "GET",
                        "name" : "get_selector_info",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "properties" : {
                              "keysize" : {
                                 "minimum" : 1024,
                                 "optional" : 1,
                                 "type" : "integer"
                              },
                              "record" : {
                                 "format" : "pmg-dkim-record",
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "selector" : {
                                 "format" : "dns-name",
                                 "optional" : 1,
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Generate a new private key for selector. All future mail will be signed with the new key!",
                        "method" : "POST",
                        "name" : "set_selector",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "force" : {
                                 "description" : "Overwrite existing key",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "keysize" : {
                                 "description" : "Number of bits for the RSA-Key",
                                 "minimum" : 1024,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1024 - N)"
                              },
                              "selector" : {
                                 "description" : "DKIM Selector",
                                 "format" : "dns-name",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/dkim/selector",
                  "text" : "selector"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Get a list of all existing selectors",
                        "method" : "GET",
                        "name" : "get_selector_list",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "selector" : {
                                    "format" : "dns-name",
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{selector}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/dkim/selectors",
                  "text" : "selectors"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Directory index.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "section" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{section}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/dkim",
            "text" : "dkim"
         },
         {
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "allowtoken" : 1,
                        "description" : "Edit custom SpamAssassin score",
                        "method" : "DELETE",
                        "name" : "delete_score",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "digest" : {
                                 "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                                 "maxLength" : 40,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "name" : {
                                 "description" : "The name of the rule.",
                                 "pattern" : "[a-zA-Z\\_\\-\\.0-9]+",
                                 "type" : "string"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Get custom SpamAssassin score",
                        "method" : "GET",
                        "name" : "get_score",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "name" : {
                                 "description" : "The name of the rule.",
                                 "pattern" : "[a-zA-Z\\_\\-\\.0-9]+",
                                 "type" : "string"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "properties" : {
                              "comment" : {
                                 "description" : "The Comment.",
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "name" : {
                                 "description" : "The name of the rule.",
                                 "pattern" : "[a-zA-Z\\_\\-\\.0-9]+",
                                 "type" : "string"
                              },
                              "score" : {
                                 "description" : "The score the rule should be valued at.",
                                 "type" : "number"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "allowtoken" : 1,
                        "description" : "Edit custom SpamAssassin score",
                        "method" : "PUT",
                        "name" : "edit_score",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "comment" : {
                                 "description" : "The Comment.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "digest" : {
                                 "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                                 "maxLength" : 40,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "name" : {
                                 "description" : "The name of the rule.",
                                 "pattern" : "[a-zA-Z\\_\\-\\.0-9]+",
                                 "type" : "string"
                              },
                              "score" : {
                                 "description" : "The score the rule should be valued at.",
                                 "type" : "number",
                                 "typetext" : "<number>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/customscores/{name}",
                  "text" : "{name}"
               }
            ],
            "info" : {
               "DELETE" : {
                  "allowtoken" : 1,
                  "description" : "Revert custom score changes.",
                  "method" : "DELETE",
                  "name" : "revert_score_changes",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               },
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "List custom scores.",
                  "method" : "GET",
                  "name" : "list_scores",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "comment" : {
                              "description" : "The Comment.",
                              "optional" : 1,
                              "type" : "string"
                           },
                           "digest" : {
                              "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                              "maxLength" : 40,
                              "optional" : 1,
                              "type" : "string"
                           },
                           "name" : {
                              "description" : "The name of the rule.",
                              "optional" : 1,
                              "pattern" : "[a-zA-Z\\_\\-\\.0-9]+",
                              "type" : "string"
                           },
                           "score" : {
                              "description" : "The score the rule should be valued at.",
                              "optional" : 1,
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{name}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Create custom SpamAssassin score",
                  "method" : "POST",
                  "name" : "create_score",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "comment" : {
                           "description" : "The Comment.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "digest" : {
                           "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                           "maxLength" : 40,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "name" : {
                           "description" : "The name of the rule.",
                           "pattern" : "[a-zA-Z\\_\\-\\.0-9]+",
                           "type" : "string"
                        },
                        "score" : {
                           "description" : "The score the rule should be valued at.",
                           "type" : "number",
                           "typetext" : "<number>"
                        }
                     }
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               },
               "PUT" : {
                  "allowtoken" : 1,
                  "description" : "Apply custom score changes.",
                  "method" : "PUT",
                  "name" : "apply_score_changes",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "digest" : {
                           "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                           "maxLength" : 40,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "restart-daemon" : {
                           "default" : 0,
                           "description" : "If set, also restarts pmg-smtp-filter. This is necessary for the changes to work.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "string"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/customscores",
            "text" : "customscores"
         },
         {
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "allowtoken" : 1,
                        "description" : "Delete an PBS remote",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "remote" : {
                                 "description" : "Profile ID.",
                                 "format" : "pve-configid",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Get Proxmox Backup Server remote configuration.",
                        "method" : "GET",
                        "name" : "read_config",
                        "parameters" : {
                           "additionalProperties" : 1,
                           "properties" : {
                              "remote" : {
                                 "description" : "Proxmox Backup Server ID.",
                                 "format" : "pve-configid",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "master",
                        "returns" : {}
                     },
                     "PUT" : {
                        "allowtoken" : 1,
                        "description" : "Update PBS remote settings.",
                        "method" : "PUT",
                        "name" : "update_config",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "datastore" : {
                                 "description" : "Proxmox Backup Server datastore name.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "delete" : {
                                 "description" : "A list of settings you want to delete.",
                                 "format" : "pve-configid-list",
                                 "maxLength" : 4096,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "digest" : {
                                 "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                                 "maxLength" : 40,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "disable" : {
                                 "description" : "Flag to disable (deactivate) the entry.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "fingerprint" : {
                                 "description" : "Certificate SHA 256 fingerprint.",
                                 "optional" : 1,
                                 "pattern" : "([A-Fa-f0-9]{2}:){31}[A-Fa-f0-9]{2}",
                                 "type" : "string"
                              },
                              "include-statistics" : {
                                 "description" : "Include statistics in scheduled backups",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "keep-daily" : {
                                 "description" : "Keep backups for the last <N> different days. If there is more than one backup for a single day, only the latest one is kept.",
                                 "format_description" : "N",
                                 "minimum" : "0",
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<N>"
                              },
                              "keep-hourly" : {
                                 "description" : "Keep backups for the last <N> different hours. If there is more than one backup for a single hour, only the latest one is kept.",
                                 "format_description" : "N",
                                 "minimum" : "0",
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<N>"
                              },
                              "keep-last" : {
                                 "description" : "Keep the last <N> backups.",
                                 "format_description" : "N",
                                 "minimum" : "0",
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<N>"
                              },
                              "keep-monthly" : {
                                 "description" : "Keep backups for the last <N> different months. If there is more than one backup for a single month, only the latest one is kept.",
                                 "format_description" : "N",
                                 "minimum" : "0",
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<N>"
                              },
                              "keep-weekly" : {
                                 "description" : "Keep backups for the last <N> different weeks. If there ismore than one backup for a single week, only the latest one is kept.",
                                 "format_description" : "N",
                                 "minimum" : "0",
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<N>"
                              },
                              "keep-yearly" : {
                                 "description" : "Keep backups for the last <N> different years. If there is more than one backup for a single year, only the latest one is kept.",
                                 "format_description" : "N",
                                 "minimum" : "0",
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<N>"
                              },
                              "notify" : {
                                 "description" : "Specify when to notify via e-mail",
                                 "enum" : [
                                    "always",
                                    "error",
                                    "never"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "password" : {
                                 "description" : "Password or API token secret for the user on the Proxmox Backup Server.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "remote" : {
                                 "description" : "Proxmox Backup Server ID.",
                                 "format" : "pve-configid",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "server" : {
                                 "description" : "Proxmox Backup Server address.",
                                 "format" : "address",
                                 "maxLength" : 256,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "username" : {
                                 "description" : "Username or API token ID on the Proxmox Backup Server",
                                 "maxLength" : 512,
                                 "minLength" : 3,
                                 "optional" : 1,
                                 "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/pbs/{remote}",
                  "text" : "{remote}"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "List all configured Proxmox Backup Server instances.",
                  "method" : "GET",
                  "name" : "list",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "additionalProperties" : 0,
                        "properties" : {
                           "datastore" : {
                              "description" : "Proxmox Backup Server datastore name.",
                              "optional" : 0,
                              "type" : "string"
                           },
                           "disable" : {
                              "description" : "Flag to disable (deactivate) the entry.",
                              "optional" : 1,
                              "type" : "boolean"
                           },
                           "fingerprint" : {
                              "description" : "Certificate SHA 256 fingerprint.",
                              "optional" : 1,
                              "pattern" : "([A-Fa-f0-9]{2}:){31}[A-Fa-f0-9]{2}",
                              "type" : "string"
                           },
                           "include-statistics" : {
                              "description" : "Include statistics in scheduled backups",
                              "optional" : 1,
                              "type" : "boolean"
                           },
                           "keep-daily" : {
                              "description" : "Keep backups for the last <N> different days. If there is more than one backup for a single day, only the latest one is kept.",
                              "format_description" : "N",
                              "minimum" : "0",
                              "optional" : 1,
                              "type" : "integer"
                           },
                           "keep-hourly" : {
                              "description" : "Keep backups for the last <N> different hours. If there is more than one backup for a single hour, only the latest one is kept.",
                              "format_description" : "N",
                              "minimum" : "0",
                              "optional" : 1,
                              "type" : "integer"
                           },
                           "keep-last" : {
                              "description" : "Keep the last <N> backups.",
                              "format_description" : "N",
                              "minimum" : "0",
                              "optional" : 1,
                              "type" : "integer"
                           },
                           "keep-monthly" : {
                              "description" : "Keep backups for the last <N> different months. If there is more than one backup for a single month, only the latest one is kept.",
                              "format_description" : "N",
                              "minimum" : "0",
                              "optional" : 1,
                              "type" : "integer"
                           },
                           "keep-weekly" : {
                              "description" : "Keep backups for the last <N> different weeks. If there ismore than one backup for a single week, only the latest one is kept.",
                              "format_description" : "N",
                              "minimum" : "0",
                              "optional" : 1,
                              "type" : "integer"
                           },
                           "keep-yearly" : {
                              "description" : "Keep backups for the last <N> different years. If there is more than one backup for a single year, only the latest one is kept.",
                              "format_description" : "N",
                              "minimum" : "0",
                              "optional" : 1,
                              "type" : "integer"
                           },
                           "notify" : {
                              "description" : "Specify when to notify via e-mail",
                              "enum" : [
                                 "always",
                                 "error",
                                 "never"
                              ],
                              "optional" : 1,
                              "type" : "string"
                           },
                           "password" : {
                              "description" : "Password or API token secret for the user on the Proxmox Backup Server.",
                              "optional" : 1,
                              "type" : "string"
                           },
                           "remote" : {
                              "description" : "Proxmox Backup Server ID.",
                              "format" : "pve-configid",
                              "type" : "string"
                           },
                           "server" : {
                              "description" : "Proxmox Backup Server address.",
                              "format" : "address",
                              "maxLength" : 256,
                              "optional" : 0,
                              "type" : "string"
                           },
                           "username" : {
                              "description" : "Username or API token ID on the Proxmox Backup Server",
                              "maxLength" : 512,
                              "minLength" : 3,
                              "optional" : 1,
                              "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{remote}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Add Proxmox Backup Server remote instance.",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "datastore" : {
                           "description" : "Proxmox Backup Server datastore name.",
                           "optional" : 0,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "disable" : {
                           "description" : "Flag to disable (deactivate) the entry.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "fingerprint" : {
                           "description" : "Certificate SHA 256 fingerprint.",
                           "optional" : 1,
                           "pattern" : "([A-Fa-f0-9]{2}:){31}[A-Fa-f0-9]{2}",
                           "type" : "string"
                        },
                        "include-statistics" : {
                           "description" : "Include statistics in scheduled backups",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "keep-daily" : {
                           "description" : "Keep backups for the last <N> different days. If there is more than one backup for a single day, only the latest one is kept.",
                           "format_description" : "N",
                           "minimum" : "0",
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<N>"
                        },
                        "keep-hourly" : {
                           "description" : "Keep backups for the last <N> different hours. If there is more than one backup for a single hour, only the latest one is kept.",
                           "format_description" : "N",
                           "minimum" : "0",
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<N>"
                        },
                        "keep-last" : {
                           "description" : "Keep the last <N> backups.",
                           "format_description" : "N",
                           "minimum" : "0",
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<N>"
                        },
                        "keep-monthly" : {
                           "description" : "Keep backups for the last <N> different months. If there is more than one backup for a single month, only the latest one is kept.",
                           "format_description" : "N",
                           "minimum" : "0",
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<N>"
                        },
                        "keep-weekly" : {
                           "description" : "Keep backups for the last <N> different weeks. If there ismore than one backup for a single week, only the latest one is kept.",
                           "format_description" : "N",
                           "minimum" : "0",
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<N>"
                        },
                        "keep-yearly" : {
                           "description" : "Keep backups for the last <N> different years. If there is more than one backup for a single year, only the latest one is kept.",
                           "format_description" : "N",
                           "minimum" : "0",
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<N>"
                        },
                        "notify" : {
                           "description" : "Specify when to notify via e-mail",
                           "enum" : [
                              "always",
                              "error",
                              "never"
                           ],
                           "optional" : 1,
                           "type" : "string"
                        },
                        "password" : {
                           "description" : "Password or API token secret for the user on the Proxmox Backup Server.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "remote" : {
                           "description" : "Proxmox Backup Server ID.",
                           "format" : "pve-configid",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "server" : {
                           "description" : "Proxmox Backup Server address.",
                           "format" : "address",
                           "maxLength" : 256,
                           "optional" : 0,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "username" : {
                           "description" : "Username or API token ID on the Proxmox Backup Server",
                           "maxLength" : 512,
                           "minLength" : 3,
                           "optional" : 1,
                           "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                           "type" : "string"
                        }
                     },
                     "type" : "object"
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/pbs",
            "text" : "pbs"
         },
         {
            "children" : [
               {
                  "children" : [
                     {
                        "info" : {
                           "DELETE" : {
                              "allowtoken" : 1,
                              "description" : "Delete ACME plugin configuration.",
                              "method" : "DELETE",
                              "name" : "delete_plugin",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Unique identifier for ACME plugin instance.",
                                       "format" : "pve-configid",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Get ACME plugin configuration.",
                              "method" : "GET",
                              "name" : "get_plugin_config",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "Unique identifier for ACME plugin instance.",
                                       "format" : "pve-configid",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "returns" : {
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "allowtoken" : 1,
                              "description" : "Update ACME plugin configuration.",
                              "method" : "PUT",
                              "name" : "update_plugin",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "api" : {
                                       "description" : "API plugin name",
                                       "enum" : [
                                          "1984hosting",
                                          "acmedns",
                                          "acmeproxy",
                                          "active24",
                                          "ad",
                                          "ali",
                                          "anx",
                                          "arvan",
                                          "aurora",
                                          "autodns",
                                          "aws",
                                          "azion",
                                          "azure",
                                          "cf",
                                          "clouddns",
                                          "cloudns",
                                          "cn",
                                          "conoha",
                                          "constellix",
                                          "cx",
                                          "cyon",
                                          "da",
                                          "ddnss",
                                          "desec",
                                          "df",
                                          "dgon",
                                          "dnsimple",
                                          "do",
                                          "doapi",
                                          "domeneshop",
                                          "dp",
                                          "dpi",
                                          "dreamhost",
                                          "duckdns",
                                          "durabledns",
                                          "dyn",
                                          "dynu",
                                          "dynv6",
                                          "easydns",
                                          "edgedns",
                                          "euserv",
                                          "exoscale",
                                          "freedns",
                                          "gandi_livedns",
                                          "gcloud",
                                          "gd",
                                          "gdnsdk",
                                          "he",
                                          "hetzner",
                                          "hexonet",
                                          "hostingde",
                                          "huaweicloud",
                                          "infoblox",
                                          "infomaniak",
                                          "internetbs",
                                          "inwx",
                                          "ionos",
                                          "ispconfig",
                                          "jd",
                                          "joker",
                                          "kappernet",
                                          "kas",
                                          "kinghost",
                                          "knot",
                                          "leaseweb",
                                          "lexicon",
                                          "linode",
                                          "linode_v4",
                                          "loopia",
                                          "lua",
                                          "maradns",
                                          "me",
                                          "miab",
                                          "misaka",
                                          "myapi",
                                          "mydevil",
                                          "mydnsjp",
                                          "namecheap",
                                          "namecom",
                                          "namesilo",
                                          "nederhost",
                                          "neodigit",
                                          "netcup",
                                          "netlify",
                                          "nic",
                                          "njalla",
                                          "nm",
                                          "nsd",
                                          "nsone",
                                          "nsupdate",
                                          "nw",
                                          "oci",
                                          "one",
                                          "online",
                                          "openprovider",
                                          "openstack",
                                          "opnsense",
                                          "ovh",
                                          "pdns",
                                          "pleskxml",
                                          "pointhq",
                                          "porkbun",
                                          "rackcorp",
                                          "rackspace",
                                          "rcode0",
                                          "regru",
                                          "scaleway",
                                          "schlundtech",
                                          "selectel",
                                          "servercow",
                                          "simply",
                                          "tele3",
                                          "transip",
                                          "ultra",
                                          "unoeuro",
                                          "variomedia",
                                          "veesp",
                                          "vscale",
                                          "vultr",
                                          "websupport",
                                          "world4you",
                                          "yandex",
                                          "zilore",
                                          "zone",
                                          "zonomi"
                                       ],
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "data" : {
                                       "description" : "DNS plugin data. (base64 encoded)",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "delete" : {
                                       "description" : "A list of settings you want to delete.",
                                       "format" : "pve-configid-list",
                                       "maxLength" : 4096,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "digest" : {
                                       "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                                       "maxLength" : 40,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "disable" : {
                                       "description" : "Flag to disable the config.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "id" : {
                                       "description" : "ACME Plugin ID name",
                                       "format" : "pve-configid",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "nodes" : {
                                       "description" : "List of cluster node names.",
                                       "format" : "pve-node-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "validation-delay" : {
                                       "default" : 30,
                                       "description" : "Extra delay in seconds to wait before requesting validation. Allows to cope with a long TTL of DNS records.",
                                       "maximum" : 172800,
                                       "minimum" : 0,
                                       "optional" : 1,
                                       "type" : "integer",
                                       "typetext" : "<integer> (0 - 172800)"
                                    }
                                 },
                                 "type" : "object"
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/acme/plugins/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "ACME plugin index.",
                        "method" : "GET",
                        "name" : "index",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "type" : {
                                 "description" : "Only list ACME plugins of a specific type",
                                 "enum" : [
                                    "dns",
                                    "standalone"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "plugin" : {
                                    "description" : "Unique identifier for ACME plugin instance.",
                                    "format" : "pve-configid",
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{plugin}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Add ACME plugin configuration.",
                        "method" : "POST",
                        "name" : "add_plugin",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "api" : {
                                 "description" : "API plugin name",
                                 "enum" : [
                                    "1984hosting",
                                    "acmedns",
                                    "acmeproxy",
                                    "active24",
                                    "ad",
                                    "ali",
                                    "anx",
                                    "arvan",
                                    "aurora",
                                    "autodns",
                                    "aws",
                                    "azion",
                                    "azure",
                                    "cf",
                                    "clouddns",
                                    "cloudns",
                                    "cn",
                                    "conoha",
                                    "constellix",
                                    "cx",
                                    "cyon",
                                    "da",
                                    "ddnss",
                                    "desec",
                                    "df",
                                    "dgon",
                                    "dnsimple",
                                    "do",
                                    "doapi",
                                    "domeneshop",
                                    "dp",
                                    "dpi",
                                    "dreamhost",
                                    "duckdns",
                                    "durabledns",
                                    "dyn",
                                    "dynu",
                                    "dynv6",
                                    "easydns",
                                    "edgedns",
                                    "euserv",
                                    "exoscale",
                                    "freedns",
                                    "gandi_livedns",
                                    "gcloud",
                                    "gd",
                                    "gdnsdk",
                                    "he",
                                    "hetzner",
                                    "hexonet",
                                    "hostingde",
                                    "huaweicloud",
                                    "infoblox",
                                    "infomaniak",
                                    "internetbs",
                                    "inwx",
                                    "ionos",
                                    "ispconfig",
                                    "jd",
                                    "joker",
                                    "kappernet",
                                    "kas",
                                    "kinghost",
                                    "knot",
                                    "leaseweb",
                                    "lexicon",
                                    "linode",
                                    "linode_v4",
                                    "loopia",
                                    "lua",
                                    "maradns",
                                    "me",
                                    "miab",
                                    "misaka",
                                    "myapi",
                                    "mydevil",
                                    "mydnsjp",
                                    "namecheap",
                                    "namecom",
                                    "namesilo",
                                    "nederhost",
                                    "neodigit",
                                    "netcup",
                                    "netlify",
                                    "nic",
                                    "njalla",
                                    "nm",
                                    "nsd",
                                    "nsone",
                                    "nsupdate",
                                    "nw",
                                    "oci",
                                    "one",
                                    "online",
                                    "openprovider",
                                    "openstack",
                                    "opnsense",
                                    "ovh",
                                    "pdns",
                                    "pleskxml",
                                    "pointhq",
                                    "porkbun",
                                    "rackcorp",
                                    "rackspace",
                                    "rcode0",
                                    "regru",
                                    "scaleway",
                                    "schlundtech",
                                    "selectel",
                                    "servercow",
                                    "simply",
                                    "tele3",
                                    "transip",
                                    "ultra",
                                    "unoeuro",
                                    "variomedia",
                                    "veesp",
                                    "vscale",
                                    "vultr",
                                    "websupport",
                                    "world4you",
                                    "yandex",
                                    "zilore",
                                    "zone",
                                    "zonomi"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "data" : {
                                 "description" : "DNS plugin data. (base64 encoded)",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "disable" : {
                                 "description" : "Flag to disable the config.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "id" : {
                                 "description" : "ACME Plugin ID name",
                                 "format" : "pve-configid",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "nodes" : {
                                 "description" : "List of cluster node names.",
                                 "format" : "pve-node-list",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "type" : {
                                 "description" : "ACME challenge type.",
                                 "enum" : [
                                    "dns",
                                    "standalone"
                                 ],
                                 "type" : "string"
                              },
                              "validation-delay" : {
                                 "default" : 30,
                                 "description" : "Extra delay in seconds to wait before requesting validation. Allows to cope with a long TTL of DNS records.",
                                 "maximum" : 172800,
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - 172800)"
                              }
                           },
                           "type" : "object"
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/acme/plugins",
                  "text" : "plugins"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "DELETE" : {
                              "allowtoken" : 1,
                              "description" : "Deactivate existing ACME account at CA.",
                              "method" : "DELETE",
                              "name" : "deactivate_account",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "force" : {
                                       "default" : 0,
                                       "description" : "Delete account data even if the server refuses to deactivate the account.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "name" : {
                                       "default" : "default",
                                       "description" : "ACME account config file name.",
                                       "format" : "pve-configid",
                                       "format_description" : "name",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<name>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "string"
                              }
                           },
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Return existing ACME account information.",
                              "method" : "GET",
                              "name" : "get_account",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "name" : {
                                       "default" : "default",
                                       "description" : "ACME account config file name.",
                                       "format" : "pve-configid",
                                       "format_description" : "name",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<name>"
                                    }
                                 }
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "account" : {
                                       "optional" : 1,
                                       "renderer" : "yaml",
                                       "type" : "object"
                                    },
                                    "directory" : {
                                       "description" : "URL of ACME CA directory endpoint.",
                                       "optional" : 1,
                                       "pattern" : "^https?://.*",
                                       "type" : "string"
                                    },
                                    "location" : {
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "tos" : {
                                       "optional" : 1,
                                       "type" : "string"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "allowtoken" : 1,
                              "description" : "Update existing ACME account information with CA. Note: not specifying any new account information triggers a refresh.",
                              "method" : "PUT",
                              "name" : "update_account",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "contact" : {
                                       "description" : "Contact email addresses.",
                                       "format" : "email-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "name" : {
                                       "default" : "default",
                                       "description" : "ACME account config file name.",
                                       "format" : "pve-configid",
                                       "format_description" : "name",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<name>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/config/acme/account/{name}",
                        "text" : "{name}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "ACME account index.",
                        "method" : "GET",
                        "name" : "account_index",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{name}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Register a new ACME account with CA.",
                        "method" : "POST",
                        "name" : "register_account",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "contact" : {
                                 "description" : "Contact email addresses.",
                                 "format" : "email-list",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "directory" : {
                                 "default" : "https://acme-v02.api.letsencrypt.org/directory",
                                 "description" : "URL of ACME CA directory endpoint.",
                                 "optional" : 1,
                                 "pattern" : "^https?://.*",
                                 "type" : "string"
                              },
                              "name" : {
                                 "default" : "default",
                                 "description" : "ACME account config file name.",
                                 "format" : "pve-configid",
                                 "format_description" : "name",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<name>"
                              },
                              "tos_url" : {
                                 "description" : "URL of CA TermsOfService - setting this indicates agreement.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "string"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/config/acme/account",
                  "text" : "account"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Retrieve ACME TermsOfService URL from CA.",
                        "method" : "GET",
                        "name" : "get_tos",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "directory" : {
                                 "default" : "https://acme-v02.api.letsencrypt.org/directory",
                                 "description" : "URL of ACME CA directory endpoint.",
                                 "optional" : 1,
                                 "pattern" : "^https?://.*",
                                 "type" : "string"
                              }
                           }
                        },
                        "permissions" : {
                           "user" : "all"
                        },
                        "returns" : {
                           "description" : "ACME TermsOfService URL.",
                           "optional" : 1,
                           "type" : "string"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/acme/tos",
                  "text" : "tos"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Get named known ACME directory endpoints.",
                        "method" : "GET",
                        "name" : "get_directories",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "user" : "all"
                        },
                        "returns" : {
                           "items" : {
                              "additionalProperties" : 0,
                              "properties" : {
                                 "name" : {
                                    "type" : "string"
                                 },
                                 "url" : {
                                    "description" : "URL of ACME CA directory endpoint.",
                                    "pattern" : "^https?://.*",
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/acme/directories",
                  "text" : "directories"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Get schema of ACME challenge types.",
                        "method" : "GET",
                        "name" : "challenge-schema",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "user" : "all"
                        },
                        "returns" : {
                           "items" : {
                              "additionalProperties" : 0,
                              "properties" : {
                                 "id" : {
                                    "type" : "string"
                                 },
                                 "name" : {
                                    "description" : "Human readable name, falls back to id",
                                    "type" : "string"
                                 },
                                 "schema" : {
                                    "type" : "object"
                                 },
                                 "type" : {
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/acme/challenge-schema",
                  "text" : "challenge-schema"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "ACME index.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "user" : "all"
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {},
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{name}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/acme",
            "text" : "acme"
         },
         {
            "children" : [
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read the webauthn configuration.",
                        "method" : "GET",
                        "name" : "get_webauthn_config",
                        "parameters" : {
                           "additionalProperties" : 0
                        },
                        "permissions" : {
                           "user" : "all"
                        },
                        "protected" : 1,
                        "returns" : {
                           "optional" : 1,
                           "properties" : {
                              "id" : {
                                 "description" : "Relying part ID. Must be the domain name without protocol, port or location.\nChanging this *will* break existing credentials.",
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "origin" : {
                                 "description" : "Site origin. Must be a `https://` URL (or `http://localhost`). Should contain the address users type in their browsers to access the web interface.\nChanging this *may* break existing credentials.",
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "rp" : {
                                 "description" : "Relying party name. Any text identifier.\nChanging this *may* break existing credentials.",
                                 "optional" : 1,
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "allowtoken" : 1,
                        "description" : "Read the webauthn configuration.",
                        "method" : "PUT",
                        "name" : "update_webauthn_config",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "delete" : {
                                 "description" : "A list of settings you want to delete.",
                                 "enum" : [
                                    "id",
                                    "rp",
                                    "origin"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "digest" : {
                                 "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                                 "maxLength" : 40,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "id" : {
                                 "description" : "Relying part ID. Must be the domain name without protocol, port or location.\nChanging this *will* break existing credentials.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "origin" : {
                                 "description" : "Site origin. Must be a `https://` URL (or `http://localhost`). Should contain the address users type in their browsers to access the web interface.\nChanging this *may* break existing credentials.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "rp" : {
                                 "description" : "Relying party name. Any text identifier.\nChanging this *may* break existing credentials.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/config/tfa/webauthn",
                  "text" : "webauthn"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Directory index.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "section" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{section}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/config/tfa",
            "text" : "tfa"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Read admin configuration properties.",
                  "method" : "GET",
                  "name" : "read_admin_section",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "object"
                  }
               },
               "PUT" : {
                  "allowtoken" : 1,
                  "description" : "Update admin configuration properties.",
                  "method" : "PUT",
                  "name" : "update_admin_section",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "advfilter" : {
                           "default" : 1,
                           "description" : "Use advanced filters for statistic.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "avast" : {
                           "default" : 0,
                           "description" : "Use Avast Virus Scanner (/usr/bin/scan). You need to buy and install 'Avast Core Security' before you can enable this feature.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "clamav" : {
                           "default" : 1,
                           "description" : "Use ClamAV Virus Scanner. This is the default virus scanner and is enabled by default.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "custom_check" : {
                           "default" : 0,
                           "description" : "Use Custom Check Script. The script has to take the defined arguments and can return Virus findings or a Spamscore.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "custom_check_path" : {
                           "default" : "/usr/local/bin/pmg-custom-check",
                           "description" : "Absolute Path to the Custom Check Script",
                           "optional" : 1,
                           "pattern" : "^/([^/\\0]+\\/)+[^/\\0]+$",
                           "type" : "string"
                        },
                        "dailyreport" : {
                           "default" : 1,
                           "description" : "Send daily reports.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "delete" : {
                           "description" : "A list of settings you want to delete.",
                           "format" : "pve-configid-list",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "demo" : {
                           "default" : 0,
                           "description" : "Demo mode - do not start SMTP filter.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "digest" : {
                           "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                           "maxLength" : 40,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "dkim_selector" : {
                           "description" : "Default DKIM selector",
                           "format" : "dns-name",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "dkim_sign" : {
                           "default" : 0,
                           "description" : "DKIM sign outbound mails with the configured Selector.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "dkim_sign_all_mail" : {
                           "default" : 0,
                           "description" : "DKIM sign all outgoing mails irrespective of the Envelope From domain.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "email" : {
                           "default" : "admin@domain.tld",
                           "description" : "Administrator E-Mail address.",
                           "format" : "email",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "http_proxy" : {
                           "description" : "Specify external http proxy which is used for downloads (example: 'http://username:password@host:port/')",
                           "optional" : 1,
                           "pattern" : "http://.*",
                           "type" : "string"
                        },
                        "statlifetime" : {
                           "default" : 7,
                           "description" : "User Statistics Lifetime (days)",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        }
                     },
                     "type" : "object"
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/admin",
            "text" : "admin"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Read clamav configuration properties.",
                  "method" : "GET",
                  "name" : "read_clamav_section",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "object"
                  }
               },
               "PUT" : {
                  "allowtoken" : 1,
                  "description" : "Update clamav configuration properties.",
                  "method" : "PUT",
                  "name" : "update_clamav_section",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "archiveblockencrypted" : {
                           "default" : 0,
                           "description" : "Whether to mark encrypted archives and documents as heuristic virus match. A match does not necessarily result in an immediate block, it just raises the Spam Score by 'clamav_heuristic_score'.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "archivemaxfiles" : {
                           "default" : 1000,
                           "description" : "Number of files to be scanned within an archive, a document, or any other kind of container. Warning: disabling this limit or setting it too high may result in severe damage to the system.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "archivemaxrec" : {
                           "default" : 5,
                           "description" : "Nested archives are scanned recursively, e.g. if a ZIP archive contains a TAR  file,  all files within it will also be scanned. This options specifies how deeply the process should be continued. Warning: setting this limit too high may result in severe damage to the system.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "archivemaxsize" : {
                           "default" : 25000000,
                           "description" : "Files larger than this limit (in bytes) won't be scanned.",
                           "minimum" : 1000000,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1000000 - N)"
                        },
                        "dbmirror" : {
                           "default" : "database.clamav.net",
                           "description" : "ClamAV database mirror server.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "delete" : {
                           "description" : "A list of settings you want to delete.",
                           "format" : "pve-configid-list",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "digest" : {
                           "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                           "maxLength" : 40,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "maxcccount" : {
                           "default" : 0,
                           "description" : "This option sets the lowest number of Credit Card or Social Security numbers found in a file to generate a detect.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "maxscansize" : {
                           "default" : 100000000,
                           "description" : "Sets the maximum amount of data (in bytes) to be scanned for each input file.",
                           "minimum" : 1000000,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1000000 - N)"
                        },
                        "safebrowsing" : {
                           "default" : 0,
                           "description" : "Enables support for Google Safe Browsing. (deprecated option, will be ignored)",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "scriptedupdates" : {
                           "default" : 1,
                           "description" : "Enables ScriptedUpdates (incremental download of signatures)",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        }
                     },
                     "type" : "object"
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/clamav",
            "text" : "clamav"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Read mail configuration properties.",
                  "method" : "GET",
                  "name" : "read_mail_section",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "object"
                  }
               },
               "PUT" : {
                  "allowtoken" : 1,
                  "description" : "Update mail configuration properties.",
                  "method" : "PUT",
                  "name" : "update_mail_section",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "banner" : {
                           "default" : "ESMTP Proxmox",
                           "description" : "ESMTP banner.",
                           "maxLength" : 1024,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "before_queue_filtering" : {
                           "default" : 0,
                           "description" : "Enable before queue filtering by pmg-smtp-filter",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "conn_count_limit" : {
                           "default" : 50,
                           "description" : "How many simultaneous connections any client is allowed to make to this service. To disable this feature, specify a limit of 0.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "conn_rate_limit" : {
                           "default" : 0,
                           "description" : "The maximal number of connection attempts any client is allowed to make to this service per minute. To disable this feature, specify a limit of 0.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "delete" : {
                           "description" : "A list of settings you want to delete.",
                           "format" : "pve-configid-list",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "digest" : {
                           "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                           "maxLength" : 40,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "dnsbl_sites" : {
                           "description" : "Optional list of DNS white/blacklist domains (see postscreen_dnsbl_sites parameter).",
                           "format" : "dnsbl-entry-list",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "dnsbl_threshold" : {
                           "default" : 1,
                           "description" : "The inclusive lower bound for blocking a remote SMTP client, based on its combined DNSBL score (see postscreen_dnsbl_threshold parameter).",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "dwarning" : {
                           "default" : 4,
                           "description" : "SMTP delay warning time (in hours).",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "ext_port" : {
                           "default" : 25,
                           "description" : "SMTP port number for incoming mail (untrusted). This must be a different number than 'int_port'.",
                           "maximum" : 65535,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 65535)"
                        },
                        "greylist" : {
                           "default" : 1,
                           "description" : "Use Greylisting for IPv4.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "greylist6" : {
                           "default" : 0,
                           "description" : "Use Greylisting for IPv6.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "greylistmask4" : {
                           "default" : 24,
                           "description" : "Netmask to apply for greylisting IPv4 hosts",
                           "maximum" : 32,
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - 32)"
                        },
                        "greylistmask6" : {
                           "default" : 64,
                           "description" : "Netmask to apply for greylisting IPv6 hosts",
                           "maximum" : 128,
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - 128)"
                        },
                        "helotests" : {
                           "default" : 0,
                           "description" : "Use SMTP HELO tests.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "hide_received" : {
                           "default" : 0,
                           "description" : "Hide received header in outgoing mails.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "int_port" : {
                           "default" : 26,
                           "description" : "SMTP port number for outgoing mail (trusted).",
                           "maximum" : 65535,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 65535)"
                        },
                        "max_filters" : {
                           "default" : 38,
                           "description" : "Maximum number of pmg-smtp-filter processes.",
                           "maximum" : 40,
                           "minimum" : 3,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (3 - 40)"
                        },
                        "max_policy" : {
                           "default" : 5,
                           "description" : "Maximum number of pmgpolicy processes.",
                           "maximum" : 10,
                           "minimum" : 2,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (2 - 10)"
                        },
                        "max_smtpd_in" : {
                           "default" : 100,
                           "description" : "Maximum number of SMTP daemon processes (in).",
                           "maximum" : 100,
                           "minimum" : 3,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (3 - 100)"
                        },
                        "max_smtpd_out" : {
                           "default" : 100,
                           "description" : "Maximum number of SMTP daemon processes (out).",
                           "maximum" : 100,
                           "minimum" : 3,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (3 - 100)"
                        },
                        "maxsize" : {
                           "default" : 10485760,
                           "description" : "Maximum email size. Larger mails are rejected.",
                           "minimum" : 1024,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1024 - N)"
                        },
                        "message_rate_limit" : {
                           "default" : 0,
                           "description" : "The maximal number of message delivery requests that any client is allowed to make to this service per minute.To disable this feature, specify a limit of 0.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "ndr_on_block" : {
                           "default" : 0,
                           "description" : "Send out NDR when mail gets blocked",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "rejectunknown" : {
                           "default" : 0,
                           "description" : "Reject unknown clients.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "rejectunknownsender" : {
                           "default" : 0,
                           "description" : "Reject unknown senders.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "relay" : {
                           "description" : "The default mail delivery transport (incoming mails).",
                           "format" : "address",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "relaynomx" : {
                           "default" : 0,
                           "description" : "Disable MX lookups for default relay (SMTP only, ignored for LMTP).",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "relayport" : {
                           "default" : 25,
                           "description" : "SMTP/LMTP port number for relay host.",
                           "maximum" : 65535,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 65535)"
                        },
                        "relayprotocol" : {
                           "default" : "smtp",
                           "description" : "Transport protocol for relay host.",
                           "enum" : [
                              "smtp",
                              "lmtp"
                           ],
                           "optional" : 1,
                           "type" : "string"
                        },
                        "smarthost" : {
                           "description" : "When set, all outgoing mails are deliverd to the specified smarthost.",
                           "format" : "address",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "smarthostport" : {
                           "default" : 25,
                           "description" : "SMTP port number for smarthost.",
                           "maximum" : 65535,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 65535)"
                        },
                        "spf" : {
                           "default" : 1,
                           "description" : "Use Sender Policy Framework.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "tls" : {
                           "default" : 0,
                           "description" : "Enable TLS.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "tlsheader" : {
                           "default" : 0,
                           "description" : "Add TLS received header.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "tlslog" : {
                           "default" : 0,
                           "description" : "Enable TLS Logging.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "verifyreceivers" : {
                           "description" : "Enable receiver verification. The value spefifies the numerical reply code when the Postfix SMTP server rejects a recipient address.",
                           "enum" : [
                              "450",
                              "550"
                           ],
                           "optional" : 1,
                           "type" : "string"
                        }
                     },
                     "type" : "object"
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/mail",
            "text" : "mail"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Read spam configuration properties.",
                  "method" : "GET",
                  "name" : "read_spam_section",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "object"
                  }
               },
               "PUT" : {
                  "allowtoken" : 1,
                  "description" : "Update spam configuration properties.",
                  "method" : "PUT",
                  "name" : "update_spam_section",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "bounce_score" : {
                           "default" : 0,
                           "description" : "Additional score for bounce mails.",
                           "maximum" : 1000,
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - 1000)"
                        },
                        "clamav_heuristic_score" : {
                           "default" : 3,
                           "description" : "Score for ClamAV heuristics (Encrypted Archives/Documents, PhishingScanURLs, ...).",
                           "maximum" : 1000,
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - 1000)"
                        },
                        "delete" : {
                           "description" : "A list of settings you want to delete.",
                           "format" : "pve-configid-list",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "digest" : {
                           "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                           "maxLength" : 40,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "languages" : {
                           "default" : "all",
                           "description" : "This option is used to specify which languages are considered OK for incoming mail.",
                           "optional" : 1,
                           "pattern" : "(all|([a-z][a-z])+( ([a-z][a-z])+)*)",
                           "type" : "string"
                        },
                        "maxspamsize" : {
                           "default" : 262144,
                           "description" : "Maximum size of spam messages in bytes.",
                           "minimum" : 64,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (64 - N)"
                        },
                        "rbl_checks" : {
                           "default" : 1,
                           "description" : "Enable real time blacklists (RBL) checks.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "use_awl" : {
                           "default" : 1,
                           "description" : "Use the Auto-Whitelist plugin.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "use_bayes" : {
                           "default" : 1,
                           "description" : "Whether to use the naive-Bayesian-style classifier.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "use_razor" : {
                           "default" : 1,
                           "description" : "Whether to use Razor2, if it is available.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "wl_bounce_relays" : {
                           "description" : "Whitelist legitimate bounce relays.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     },
                     "type" : "object"
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/spam",
            "text" : "spam"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Read spamquar configuration properties.",
                  "method" : "GET",
                  "name" : "read_spamquar_section",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "object"
                  }
               },
               "PUT" : {
                  "allowtoken" : 1,
                  "description" : "Update spamquar configuration properties.",
                  "method" : "PUT",
                  "name" : "update_spamquar_section",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "allowhrefs" : {
                           "default" : 1,
                           "description" : "Allow to view hyperlinks.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "authmode" : {
                           "default" : "ticket",
                           "description" : "Authentication mode to access the quarantine interface. Mode 'ticket' allows login using tickets sent with the daily spam report. Mode 'ldap' requires to login using an LDAP account. Finally, mode 'ldapticket' allows both ways.",
                           "enum" : [
                              "ticket",
                              "ldap",
                              "ldapticket"
                           ],
                           "optional" : 1,
                           "type" : "string"
                        },
                        "delete" : {
                           "description" : "A list of settings you want to delete.",
                           "format" : "pve-configid-list",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "digest" : {
                           "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                           "maxLength" : 40,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "hostname" : {
                           "description" : "Quarantine Host. Useful if you run a Cluster and want users to connect to a specific host.",
                           "format" : "address",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "lifetime" : {
                           "default" : 7,
                           "description" : "Quarantine life time (days)",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "mailfrom" : {
                           "description" : "Text for 'From' header in daily spam report mails.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "port" : {
                           "default" : 8006,
                           "description" : "Quarantine Port. Useful if you have a reverse proxy or port forwarding for the webinterface. Only used for the generated Spam report.",
                           "maximum" : 65535,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 65535)"
                        },
                        "protocol" : {
                           "default" : "https",
                           "description" : "Quarantine Webinterface Protocol. Useful if you have a reverse proxy for the webinterface. Only used for the generated Spam report.",
                           "enum" : [
                              "http",
                              "https"
                           ],
                           "optional" : 1,
                           "type" : "string"
                        },
                        "quarantinelink" : {
                           "default" : 0,
                           "description" : "Enables user self-service for Quarantine Links. Caution: this is accessible without authentication",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "reportstyle" : {
                           "default" : "verbose",
                           "description" : "Spam report style.",
                           "enum" : [
                              "none",
                              "short",
                              "verbose",
                              "custom"
                           ],
                           "optional" : 1,
                           "type" : "string"
                        },
                        "viewimages" : {
                           "default" : 1,
                           "description" : "Allow to view images.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        }
                     },
                     "type" : "object"
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/spamquar",
            "text" : "spamquar"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Read virusquar configuration properties.",
                  "method" : "GET",
                  "name" : "read_virusquar_section",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "audit"
                     ]
                  },
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "object"
                  }
               },
               "PUT" : {
                  "allowtoken" : 1,
                  "description" : "Update virusquar configuration properties.",
                  "method" : "PUT",
                  "name" : "update_virusquar_section",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "allowhrefs" : {
                           "default" : 1,
                           "description" : "Allow to view hyperlinks.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "delete" : {
                           "description" : "A list of settings you want to delete.",
                           "format" : "pve-configid-list",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "digest" : {
                           "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                           "maxLength" : 40,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "lifetime" : {
                           "default" : 7,
                           "description" : "Quarantine life time (days)",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "viewimages" : {
                           "default" : 1,
                           "description" : "Allow to view images.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        }
                     },
                     "type" : "object"
                  },
                  "permissions" : {
                     "check" : [
                        "admin"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/virusquar",
            "text" : "virusquar"
         },
         {
            "info" : {
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Test Regex ignoring case",
                  "method" : "POST",
                  "name" : "regextest",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "regex" : {
                           "description" : "The Regex to test",
                           "maxLength" : 1024,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "text" : {
                           "description" : "The String to test",
                           "maxLength" : 1024,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "protected" : 0,
                  "returns" : {
                     "type" : "number"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/config/regextest",
            "text" : "regextest"
         }
      ],
      "info" : {
         "GET" : {
            "allowtoken" : 1,
            "description" : "Directory index.",
            "method" : "GET",
            "name" : "index",
            "parameters" : {
               "additionalProperties" : 0
            },
            "returns" : {
               "items" : {
                  "properties" : {
                     "section" : {
                        "type" : "string"
                     }
                  },
                  "type" : "object"
               },
               "links" : [
                  {
                     "href" : "{section}",
                     "rel" : "child"
                  }
               ],
               "type" : "array"
            }
         }
      },
      "leaf" : 0,
      "path" : "/config",
      "text" : "config"
   },
   {
      "children" : [
         {
            "children" : [
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Print Postfix queue domain and age distribution.",
                              "method" : "GET",
                              "name" : "qshape",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "queue" : {
                                       "default" : "deferred",
                                       "description" : "Postfix queue name.",
                                       "enum" : [
                                          "deferred",
                                          "active",
                                          "incoming",
                                          "hold"
                                       ],
                                       "optional" : 1,
                                       "type" : "string"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "items" : {
                                    "properties" : {},
                                    "type" : "object"
                                 },
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/postfix/qshape",
                        "text" : "qshape"
                     },
                     {
                        "children" : [
                           {
                              "children" : [
                                 {
                                    "info" : {
                                       "DELETE" : {
                                          "allowtoken" : 1,
                                          "description" : "Delete one message with the named queue ID.",
                                          "method" : "DELETE",
                                          "name" : "delete_queued_mail",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "node" : {
                                                   "description" : "The cluster node name.",
                                                   "format" : "pve-node",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "queue" : {
                                                   "description" : "Postfix queue name.",
                                                   "enum" : [
                                                      "deferred",
                                                      "active",
                                                      "incoming",
                                                      "hold"
                                                   ],
                                                   "type" : "string"
                                                },
                                                "queue_id" : {
                                                   "description" : "The Message queue ID.",
                                                   "maxLength" : 20,
                                                   "minLength" : 8,
                                                   "pattern" : "[a-zA-Z0-9]+",
                                                   "type" : "string"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "node",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       },
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Get the contents of a queued mail.",
                                          "method" : "GET",
                                          "name" : "read_queued_mail",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "body" : {
                                                   "default" : 0,
                                                   "description" : "Include body content.",
                                                   "optional" : 1,
                                                   "type" : "boolean",
                                                   "typetext" : "<boolean>"
                                                },
                                                "header" : {
                                                   "default" : 1,
                                                   "description" : "Show message header content.",
                                                   "optional" : 1,
                                                   "type" : "boolean",
                                                   "typetext" : "<boolean>"
                                                },
                                                "node" : {
                                                   "description" : "The cluster node name.",
                                                   "format" : "pve-node",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "queue" : {
                                                   "description" : "Postfix queue name.",
                                                   "enum" : [
                                                      "deferred",
                                                      "active",
                                                      "incoming",
                                                      "hold"
                                                   ],
                                                   "type" : "string"
                                                },
                                                "queue_id" : {
                                                   "description" : "The Message queue ID.",
                                                   "maxLength" : 20,
                                                   "minLength" : 8,
                                                   "pattern" : "[a-zA-Z0-9]+",
                                                   "type" : "string"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "node",
                                          "returns" : {
                                             "type" : "string"
                                          }
                                       },
                                       "POST" : {
                                          "allowtoken" : 1,
                                          "description" : "Schedule immediate delivery of deferred mail with the specified queue ID.",
                                          "method" : "POST",
                                          "name" : "flush_queued_mail",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "node" : {
                                                   "description" : "The cluster node name.",
                                                   "format" : "pve-node",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "queue" : {
                                                   "description" : "Postfix queue name.",
                                                   "enum" : [
                                                      "deferred",
                                                      "active",
                                                      "incoming",
                                                      "hold"
                                                   ],
                                                   "type" : "string"
                                                },
                                                "queue_id" : {
                                                   "description" : "The Message queue ID.",
                                                   "maxLength" : 20,
                                                   "minLength" : 8,
                                                   "pattern" : "[a-zA-Z0-9]+",
                                                   "type" : "string"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "node",
                                          "returns" : {
                                             "type" : "null"
                                          }
                                       }
                                    },
                                    "leaf" : 1,
                                    "path" : "/nodes/{node}/postfix/queue/{queue}/{queue_id}",
                                    "text" : "{queue_id}"
                                 }
                              ],
                              "info" : {
                                 "DELETE" : {
                                    "allowtoken" : 1,
                                    "description" : "Delete all mails in the queue.",
                                    "method" : "DELETE",
                                    "name" : "delete_queue",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "queue" : {
                                             "description" : "Postfix queue name.",
                                             "enum" : [
                                                "deferred",
                                                "active",
                                                "incoming",
                                                "hold"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 },
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "List the mail queue for a specific domain.",
                                    "method" : "GET",
                                    "name" : "mailq",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "filter" : {
                                             "description" : "Filter string.",
                                             "maxLength" : 64,
                                             "optional" : 1,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "limit" : {
                                             "minimum" : 0,
                                             "optional" : 1,
                                             "type" : "integer",
                                             "typetext" : "<integer> (0 - N)"
                                          },
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "queue" : {
                                             "description" : "Postfix queue name.",
                                             "enum" : [
                                                "deferred",
                                                "active",
                                                "incoming",
                                                "hold"
                                             ],
                                             "type" : "string"
                                          },
                                          "sortdir" : {
                                             "description" : "Sort direction.",
                                             "enum" : [
                                                "ASC",
                                                "DESC"
                                             ],
                                             "optional" : 1,
                                             "requires" : "sortfield",
                                             "type" : "string"
                                          },
                                          "sortfield" : {
                                             "description" : "Sort field.",
                                             "enum" : [
                                                "arrival_time",
                                                "message_size",
                                                "sender",
                                                "receiver",
                                                "reason"
                                             ],
                                             "optional" : 1,
                                             "type" : "string"
                                          },
                                          "start" : {
                                             "minimum" : 0,
                                             "optional" : 1,
                                             "type" : "integer",
                                             "typetext" : "<integer> (0 - N)"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {},
                                          "type" : "object"
                                       },
                                       "links" : [
                                          {
                                             "href" : "{queue_id}",
                                             "rel" : "child"
                                          }
                                       ],
                                       "type" : "array"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/nodes/{node}/postfix/queue/{queue}",
                              "text" : "{queue}"
                           }
                        ],
                        "info" : {
                           "DELETE" : {
                              "allowtoken" : 1,
                              "description" : "Delete all mails in all posfix queues.",
                              "method" : "DELETE",
                              "name" : "delete_all_queues",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Directory index.",
                              "method" : "GET",
                              "name" : "queue_index",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "user" : "all"
                              },
                              "returns" : {
                                 "items" : {
                                    "properties" : {},
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{name}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/nodes/{node}/postfix/queue",
                        "text" : "queue"
                     },
                     {
                        "info" : {
                           "POST" : {
                              "allowtoken" : 1,
                              "description" : "Flush the queue: attempt to deliver all queued mail.",
                              "method" : "POST",
                              "name" : "flush_queues",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/postfix/flush_queues",
                        "text" : "flush_queues"
                     },
                     {
                        "info" : {
                           "POST" : {
                              "allowtoken" : 1,
                              "description" : "Discards the address verification cache.",
                              "method" : "POST",
                              "name" : "discard_verify_cache",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/postfix/discard_verify_cache",
                        "text" : "discard_verify_cache"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Directory index.",
                        "method" : "GET",
                        "name" : "index",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "user" : "all"
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{name}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/postfix",
                  "text" : "postfix"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "ClamAV virus database status.",
                              "method" : "GET",
                              "name" : "database_status",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "node",
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "build_time" : {
                                          "type" : "string"
                                       },
                                       "nsigs" : {
                                          "type" : "integer"
                                       },
                                       "type" : {
                                          "type" : "string"
                                       },
                                       "version" : {
                                          "optional" : 1,
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "type" : "array"
                              }
                           },
                           "POST" : {
                              "allowtoken" : 1,
                              "description" : "Update ClamAV virus databases.",
                              "method" : "POST",
                              "name" : "update_database",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/clamav/database",
                        "text" : "database"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Directory index.",
                        "method" : "GET",
                        "name" : "index",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{subdir}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/clamav",
                  "text" : "clamav"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "SpamAssassin rules status.",
                              "method" : "GET",
                              "name" : "rules_status",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "node",
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "channel" : {
                                          "type" : "string"
                                       },
                                       "last_updated" : {
                                          "optional" : 1,
                                          "type" : "integer"
                                       },
                                       "update_avail" : {
                                          "type" : "boolean"
                                       },
                                       "update_version" : {
                                          "optional" : 1,
                                          "type" : "string"
                                       },
                                       "version" : {
                                          "optional" : 1,
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "type" : "array"
                              }
                           },
                           "POST" : {
                              "allowtoken" : 1,
                              "description" : "Update SpamAssassin rules.",
                              "method" : "POST",
                              "name" : "update_rules",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/spamassassin/rules",
                        "text" : "rules"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Directory index.",
                        "method" : "GET",
                        "name" : "index",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{subdir}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/spamassassin",
                  "text" : "spamassassin"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "DELETE" : {
                              "allowtoken" : 1,
                              "description" : "Delete network device configuration",
                              "method" : "DELETE",
                              "name" : "delete_network",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "iface" : {
                                       "description" : "Network interface name.",
                                       "format" : "pve-iface",
                                       "maxLength" : 20,
                                       "minLength" : 2,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Read network device configuration",
                              "method" : "GET",
                              "name" : "network_config",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "iface" : {
                                       "description" : "Network interface name.",
                                       "format" : "pve-iface",
                                       "maxLength" : 20,
                                       "minLength" : 2,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "node",
                              "returns" : {
                                 "properties" : {
                                    "method" : {
                                       "type" : "string"
                                    },
                                    "type" : {
                                       "type" : "string"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "allowtoken" : 1,
                              "description" : "Update network device configuration",
                              "method" : "PUT",
                              "name" : "update_network",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "address" : {
                                       "description" : "IP address.",
                                       "format" : "ipv4",
                                       "optional" : 1,
                                       "requires" : "netmask",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "address6" : {
                                       "description" : "IP address.",
                                       "format" : "ipv6",
                                       "optional" : 1,
                                       "requires" : "netmask6",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "autostart" : {
                                       "description" : "Automatically start interface on boot.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "bond-primary" : {
                                       "description" : "Specify the primary interface for active-backup bond.",
                                       "format" : "pve-iface",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "bond_mode" : {
                                       "description" : "Bonding mode.",
                                       "enum" : [
                                          "balance-rr",
                                          "active-backup",
                                          "balance-xor",
                                          "broadcast",
                                          "802.3ad",
                                          "balance-tlb",
                                          "balance-alb",
                                          "balance-slb",
                                          "lacp-balance-slb",
                                          "lacp-balance-tcp"
                                       ],
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "bond_xmit_hash_policy" : {
                                       "description" : "Selects the transmit hash policy to use for slave selection in balance-xor and 802.3ad modes.",
                                       "enum" : [
                                          "layer2",
                                          "layer2+3",
                                          "layer3+4"
                                       ],
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "bridge_ports" : {
                                       "description" : "Specify the interfaces you want to add to your bridge.",
                                       "format" : "pve-iface-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "bridge_vlan_aware" : {
                                       "description" : "Enable bridge vlan support.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "cidr" : {
                                       "description" : "IPv4 CIDR.",
                                       "format" : "CIDRv4",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "cidr6" : {
                                       "description" : "IPv6 CIDR.",
                                       "format" : "CIDRv6",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "comments" : {
                                       "description" : "Comments",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "comments6" : {
                                       "description" : "Comments",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "delete" : {
                                       "description" : "A list of settings you want to delete.",
                                       "format" : "pve-configid-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "gateway" : {
                                       "description" : "Default gateway address.",
                                       "format" : "ipv4",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "gateway6" : {
                                       "description" : "Default ipv6 gateway address.",
                                       "format" : "ipv6",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "iface" : {
                                       "description" : "Network interface name.",
                                       "format" : "pve-iface",
                                       "maxLength" : 20,
                                       "minLength" : 2,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "mtu" : {
                                       "description" : "MTU.",
                                       "maximum" : 65520,
                                       "minimum" : 1280,
                                       "optional" : 1,
                                       "type" : "integer",
                                       "typetext" : "<integer> (1280 - 65520)"
                                    },
                                    "netmask" : {
                                       "description" : "Network mask.",
                                       "format" : "ipv4mask",
                                       "optional" : 1,
                                       "requires" : "address",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "netmask6" : {
                                       "description" : "Network mask.",
                                       "maximum" : 128,
                                       "minimum" : 0,
                                       "optional" : 1,
                                       "requires" : "address6",
                                       "type" : "integer",
                                       "typetext" : "<integer> (0 - 128)"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "ovs_bonds" : {
                                       "description" : "Specify the interfaces used by the bonding device.",
                                       "format" : "pve-iface-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "ovs_bridge" : {
                                       "description" : "The OVS bridge associated with a OVS port. This is required when you create an OVS port.",
                                       "format" : "pve-iface",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "ovs_options" : {
                                       "description" : "OVS interface options.",
                                       "maxLength" : 1024,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "ovs_ports" : {
                                       "description" : "Specify the interfaces you want to add to your bridge.",
                                       "format" : "pve-iface-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "ovs_tag" : {
                                       "description" : "Specify a VLan tag (used by OVSPort, OVSIntPort, OVSBond)",
                                       "maximum" : 4094,
                                       "minimum" : 1,
                                       "optional" : 1,
                                       "type" : "integer",
                                       "typetext" : "<integer> (1 - 4094)"
                                    },
                                    "slaves" : {
                                       "description" : "Specify the interfaces used by the bonding device.",
                                       "format" : "pve-iface-list",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "type" : {
                                       "description" : "Network interface type",
                                       "enum" : [
                                          "bridge",
                                          "bond",
                                          "eth",
                                          "alias",
                                          "vlan",
                                          "OVSBridge",
                                          "OVSBond",
                                          "OVSPort",
                                          "OVSIntPort",
                                          "unknown"
                                       ],
                                       "type" : "string"
                                    },
                                    "vlan-id" : {
                                       "description" : "vlan-id for a custom named vlan interface (ifupdown2 only).",
                                       "maximum" : 4094,
                                       "minimum" : 1,
                                       "optional" : 1,
                                       "type" : "integer",
                                       "typetext" : "<integer> (1 - 4094)"
                                    },
                                    "vlan-raw-device" : {
                                       "description" : "Specify the raw interface for the vlan interface.",
                                       "format" : "pve-iface",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/network/{iface}",
                        "text" : "{iface}"
                     }
                  ],
                  "info" : {
                     "DELETE" : {
                        "allowtoken" : 1,
                        "description" : "Revert network configuration changes.",
                        "method" : "DELETE",
                        "name" : "revert_network_changes",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "List available networks",
                        "method" : "GET",
                        "name" : "index",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "type" : {
                                 "description" : "Only list specific interface types.",
                                 "enum" : [
                                    "bridge",
                                    "bond",
                                    "eth",
                                    "alias",
                                    "vlan",
                                    "OVSBridge",
                                    "OVSBond",
                                    "OVSPort",
                                    "OVSIntPort",
                                    "any_bridge"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{iface}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Create network device configuration",
                        "method" : "POST",
                        "name" : "create_network",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "address" : {
                                 "description" : "IP address.",
                                 "format" : "ipv4",
                                 "optional" : 1,
                                 "requires" : "netmask",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "address6" : {
                                 "description" : "IP address.",
                                 "format" : "ipv6",
                                 "optional" : 1,
                                 "requires" : "netmask6",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "autostart" : {
                                 "description" : "Automatically start interface on boot.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "bond-primary" : {
                                 "description" : "Specify the primary interface for active-backup bond.",
                                 "format" : "pve-iface",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "bond_mode" : {
                                 "description" : "Bonding mode.",
                                 "enum" : [
                                    "balance-rr",
                                    "active-backup",
                                    "balance-xor",
                                    "broadcast",
                                    "802.3ad",
                                    "balance-tlb",
                                    "balance-alb",
                                    "balance-slb",
                                    "lacp-balance-slb",
                                    "lacp-balance-tcp"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "bond_xmit_hash_policy" : {
                                 "description" : "Selects the transmit hash policy to use for slave selection in balance-xor and 802.3ad modes.",
                                 "enum" : [
                                    "layer2",
                                    "layer2+3",
                                    "layer3+4"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "bridge_ports" : {
                                 "description" : "Specify the interfaces you want to add to your bridge.",
                                 "format" : "pve-iface-list",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "bridge_vlan_aware" : {
                                 "description" : "Enable bridge vlan support.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "cidr" : {
                                 "description" : "IPv4 CIDR.",
                                 "format" : "CIDRv4",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "cidr6" : {
                                 "description" : "IPv6 CIDR.",
                                 "format" : "CIDRv6",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "comments" : {
                                 "description" : "Comments",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "comments6" : {
                                 "description" : "Comments",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "gateway" : {
                                 "description" : "Default gateway address.",
                                 "format" : "ipv4",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "gateway6" : {
                                 "description" : "Default ipv6 gateway address.",
                                 "format" : "ipv6",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "iface" : {
                                 "description" : "Network interface name.",
                                 "format" : "pve-iface",
                                 "maxLength" : 20,
                                 "minLength" : 2,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "mtu" : {
                                 "description" : "MTU.",
                                 "maximum" : 65520,
                                 "minimum" : 1280,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1280 - 65520)"
                              },
                              "netmask" : {
                                 "description" : "Network mask.",
                                 "format" : "ipv4mask",
                                 "optional" : 1,
                                 "requires" : "address",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "netmask6" : {
                                 "description" : "Network mask.",
                                 "maximum" : 128,
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "requires" : "address6",
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - 128)"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "ovs_bonds" : {
                                 "description" : "Specify the interfaces used by the bonding device.",
                                 "format" : "pve-iface-list",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "ovs_bridge" : {
                                 "description" : "The OVS bridge associated with a OVS port. This is required when you create an OVS port.",
                                 "format" : "pve-iface",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "ovs_options" : {
                                 "description" : "OVS interface options.",
                                 "maxLength" : 1024,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "ovs_ports" : {
                                 "description" : "Specify the interfaces you want to add to your bridge.",
                                 "format" : "pve-iface-list",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "ovs_tag" : {
                                 "description" : "Specify a VLan tag (used by OVSPort, OVSIntPort, OVSBond)",
                                 "maximum" : 4094,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 4094)"
                              },
                              "slaves" : {
                                 "description" : "Specify the interfaces used by the bonding device.",
                                 "format" : "pve-iface-list",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "type" : {
                                 "description" : "Network interface type",
                                 "enum" : [
                                    "bridge",
                                    "bond",
                                    "eth",
                                    "alias",
                                    "vlan",
                                    "OVSBridge",
                                    "OVSBond",
                                    "OVSPort",
                                    "OVSIntPort",
                                    "unknown"
                                 ],
                                 "type" : "string"
                              },
                              "vlan-id" : {
                                 "description" : "vlan-id for a custom named vlan interface (ifupdown2 only).",
                                 "maximum" : 4094,
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - 4094)"
                              },
                              "vlan-raw-device" : {
                                 "description" : "Specify the raw interface for the vlan interface.",
                                 "format" : "pve-iface",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "PUT" : {
                        "allowtoken" : 1,
                        "description" : "Reload network configuration",
                        "method" : "PUT",
                        "name" : "reload_network_config",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "string"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/network",
                  "text" : "network"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Read task log.",
                                    "method" : "GET",
                                    "name" : "read_task_log",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "limit" : {
                                             "minimum" : 0,
                                             "optional" : 1,
                                             "type" : "integer",
                                             "typetext" : "<integer> (0 - N)"
                                          },
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "start" : {
                                             "minimum" : 0,
                                             "optional" : 1,
                                             "type" : "integer",
                                             "typetext" : "<integer> (0 - N)"
                                          },
                                          "upid" : {
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "n" : {
                                                "description" : "Line number",
                                                "type" : "integer"
                                             },
                                             "t" : {
                                                "description" : "Line text",
                                                "type" : "string"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/tasks/{upid}/log",
                              "text" : "log"
                           },
                           {
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Read task status.",
                                    "method" : "GET",
                                    "name" : "read_task_status",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "upid" : {
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "properties" : {
                                          "pid" : {
                                             "type" : "integer"
                                          },
                                          "status" : {
                                             "enum" : [
                                                "running",
                                                "stopped"
                                             ],
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/tasks/{upid}/status",
                              "text" : "status"
                           }
                        ],
                        "info" : {
                           "DELETE" : {
                              "allowtoken" : 1,
                              "description" : "Stop a task.",
                              "method" : "DELETE",
                              "name" : "stop_task",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "upid" : {
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "",
                              "method" : "GET",
                              "name" : "upid_index",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "upid" : {
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "returns" : {
                                 "items" : {
                                    "properties" : {},
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{name}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/nodes/{node}/tasks/{upid}",
                        "text" : "{upid}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read task list for one node (finished tasks).",
                        "method" : "GET",
                        "name" : "node_tasks",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "errors" : {
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "limit" : {
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "since" : {
                                 "description" : "Only list tasks since this UNIX epoch.",
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer>"
                              },
                              "start" : {
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "statusfilter" : {
                                 "description" : "List of Task States that should be returned.",
                                 "format" : "pve-task-status-type-list",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "typefilter" : {
                                 "description" : "Only list tasks of this type (e.g., aptupdate, saupdate).",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "until" : {
                                 "description" : "Only list tasks until this UNIX epoch.",
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer>"
                              },
                              "userfilter" : {
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "upid" : {
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{upid}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/tasks",
                  "text" : "tasks"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Read service properties",
                                    "method" : "GET",
                                    "name" : "service_state",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "service" : {
                                             "description" : "Service ID",
                                             "enum" : [
                                                "clamav-daemon",
                                                "clamav-freshclam",
                                                "fetchmail",
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmgpolicy",
                                                "pmg-smtp-filter",
                                                "pmgtunnel",
                                                "pmgmirror",
                                                "ssh",
                                                "rsyslog",
                                                "postfix",
                                                "postgres",
                                                "systemd-timesyncd",
                                                "pmg-hourly",
                                                "pmg-daily",
                                                "pmgreport",
                                                "pmgspamreport",
                                                "chrony"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "object"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/services/{service}/state",
                              "text" : "state"
                           },
                           {
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Start service.",
                                    "method" : "POST",
                                    "name" : "service_start",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "service" : {
                                             "description" : "Service ID",
                                             "enum" : [
                                                "clamav-daemon",
                                                "clamav-freshclam",
                                                "fetchmail",
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmgpolicy",
                                                "pmg-smtp-filter",
                                                "pmgtunnel",
                                                "pmgmirror",
                                                "ssh",
                                                "rsyslog",
                                                "postfix",
                                                "postgres",
                                                "systemd-timesyncd",
                                                "pmg-hourly",
                                                "pmg-daily",
                                                "pmgreport",
                                                "pmgspamreport",
                                                "chrony"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "string"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/services/{service}/start",
                              "text" : "start"
                           },
                           {
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Stop service.",
                                    "method" : "POST",
                                    "name" : "service_stop",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "service" : {
                                             "description" : "Service ID",
                                             "enum" : [
                                                "clamav-daemon",
                                                "clamav-freshclam",
                                                "fetchmail",
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmgpolicy",
                                                "pmg-smtp-filter",
                                                "pmgtunnel",
                                                "pmgmirror",
                                                "ssh",
                                                "rsyslog",
                                                "postfix",
                                                "postgres",
                                                "systemd-timesyncd",
                                                "pmg-hourly",
                                                "pmg-daily",
                                                "pmgreport",
                                                "pmgspamreport",
                                                "chrony"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "string"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/services/{service}/stop",
                              "text" : "stop"
                           },
                           {
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Restart service.",
                                    "method" : "POST",
                                    "name" : "service_restart",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "service" : {
                                             "description" : "Service ID",
                                             "enum" : [
                                                "clamav-daemon",
                                                "clamav-freshclam",
                                                "fetchmail",
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmgpolicy",
                                                "pmg-smtp-filter",
                                                "pmgtunnel",
                                                "pmgmirror",
                                                "ssh",
                                                "rsyslog",
                                                "postfix",
                                                "postgres",
                                                "systemd-timesyncd",
                                                "pmg-hourly",
                                                "pmg-daily",
                                                "pmgreport",
                                                "pmgspamreport",
                                                "chrony"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "string"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/services/{service}/restart",
                              "text" : "restart"
                           },
                           {
                              "info" : {
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Reload service.",
                                    "method" : "POST",
                                    "name" : "service_reload",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "service" : {
                                             "description" : "Service ID",
                                             "enum" : [
                                                "clamav-daemon",
                                                "clamav-freshclam",
                                                "fetchmail",
                                                "pmgproxy",
                                                "pmgdaemon",
                                                "pmgpolicy",
                                                "pmg-smtp-filter",
                                                "pmgtunnel",
                                                "pmgmirror",
                                                "ssh",
                                                "rsyslog",
                                                "postfix",
                                                "postgres",
                                                "systemd-timesyncd",
                                                "pmg-hourly",
                                                "pmg-daily",
                                                "pmgreport",
                                                "pmgspamreport",
                                                "chrony"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "string"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/services/{service}/reload",
                              "text" : "reload"
                           }
                        ],
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Directory index",
                              "method" : "GET",
                              "name" : "srvcmdidx",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "service" : {
                                       "description" : "Service ID",
                                       "enum" : [
                                          "clamav-daemon",
                                          "clamav-freshclam",
                                          "fetchmail",
                                          "pmgproxy",
                                          "pmgdaemon",
                                          "pmgpolicy",
                                          "pmg-smtp-filter",
                                          "pmgtunnel",
                                          "pmgmirror",
                                          "ssh",
                                          "rsyslog",
                                          "postfix",
                                          "postgres",
                                          "systemd-timesyncd",
                                          "pmg-hourly",
                                          "pmg-daily",
                                          "pmgreport",
                                          "pmgspamreport",
                                          "chrony"
                                       ],
                                       "type" : "string"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "subdir" : {
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{subdir}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/nodes/{node}/services/{service}",
                        "text" : "{service}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Service list.",
                        "method" : "GET",
                        "name" : "index",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{service}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/services",
                  "text" : "services"
               },
               {
                  "info" : {
                     "DELETE" : {
                        "allowtoken" : 1,
                        "description" : "Delete subscription key.",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read subscription info.",
                        "method" : "GET",
                        "name" : "get",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "qmanager",
                              "audit",
                              "quser"
                           ]
                        },
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "object"
                        }
                     },
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Update subscription info.",
                        "method" : "POST",
                        "name" : "update",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "force" : {
                                 "default" : 0,
                                 "description" : "Always connect to server, even if we have up to date info inside local cache.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "PUT" : {
                        "allowtoken" : 1,
                        "description" : "Set subscription key.",
                        "method" : "PUT",
                        "name" : "set",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "key" : {
                                 "description" : "Proxmox Mail Gateway subscription key",
                                 "maxLength" : 32,
                                 "pattern" : "pmg([cbsp])-[0-9a-f]{10}",
                                 "type" : "string"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/subscription",
                  "text" : "subscription"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "List available updates.",
                              "method" : "GET",
                              "name" : "list_updates",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "items" : {
                                    "properties" : {},
                                    "type" : "object"
                                 },
                                 "type" : "array"
                              }
                           },
                           "POST" : {
                              "allowtoken" : 1,
                              "description" : "This is used to resynchronize the package index files from their sources (apt-get update).",
                              "method" : "POST",
                              "name" : "update_database",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "notify" : {
                                       "default" : 0,
                                       "description" : "Send notification mail about new packages (to email address specified for user 'root@pam').",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "quiet" : {
                                       "default" : 0,
                                       "description" : "Only produces output suitable for logging, omitting progress indicators.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/apt/update",
                        "text" : "update"
                     },
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Get package changelogs.",
                              "method" : "GET",
                              "name" : "changelog",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "name" : {
                                       "description" : "Package name.",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "version" : {
                                       "description" : "Package version.",
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/apt/changelog",
                        "text" : "changelog"
                     },
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Get APT repository information.",
                              "method" : "GET",
                              "name" : "repositories",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "node",
                              "returns" : {
                                 "description" : "Result from parsing the APT repository files in /etc/apt/.",
                                 "properties" : {
                                    "digest" : {
                                       "description" : "Common digest of all files.",
                                       "type" : "string"
                                    },
                                    "errors" : {
                                       "description" : "List of problematic repository files.",
                                       "items" : {
                                          "properties" : {
                                             "error" : {
                                                "description" : "The error message",
                                                "type" : "string"
                                             },
                                             "path" : {
                                                "description" : "Path to the problematic file.",
                                                "type" : "string"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    },
                                    "files" : {
                                       "description" : "List of parsed repository files.",
                                       "items" : {
                                          "properties" : {
                                             "digest" : {
                                                "description" : "Digest of the file as bytes.",
                                                "items" : {
                                                   "type" : "integer"
                                                },
                                                "type" : "array"
                                             },
                                             "file-type" : {
                                                "description" : "Format of the file.",
                                                "enum" : [
                                                   "list",
                                                   "sources"
                                                ],
                                                "type" : "string"
                                             },
                                             "path" : {
                                                "description" : "Path to the problematic file.",
                                                "type" : "string"
                                             },
                                             "repositories" : {
                                                "description" : "The parsed repositories.",
                                                "items" : {
                                                   "properties" : {
                                                      "Comment" : {
                                                         "description" : "Associated comment",
                                                         "optional" : 1,
                                                         "type" : "string"
                                                      },
                                                      "Components" : {
                                                         "description" : "List of repository components",
                                                         "items" : {
                                                            "type" : "string"
                                                         },
                                                         "optional" : 1,
                                                         "type" : "array"
                                                      },
                                                      "Enabled" : {
                                                         "description" : "Whether the repository is enabled or not",
                                                         "type" : "boolean"
                                                      },
                                                      "FileType" : {
                                                         "description" : "Format of the defining file.",
                                                         "enum" : [
                                                            "list",
                                                            "sources"
                                                         ],
                                                         "type" : "string"
                                                      },
                                                      "Options" : {
                                                         "description" : "Additional options",
                                                         "items" : {
                                                            "properties" : {
                                                               "Key" : {
                                                                  "type" : "string"
                                                               },
                                                               "Values" : {
                                                                  "items" : {
                                                                     "type" : "string"
                                                                  },
                                                                  "type" : "array"
                                                               }
                                                            },
                                                            "type" : "object"
                                                         },
                                                         "optional" : 1,
                                                         "type" : "array"
                                                      },
                                                      "Suites" : {
                                                         "description" : "List of package distribuitions",
                                                         "items" : {
                                                            "type" : "string"
                                                         },
                                                         "type" : "array"
                                                      },
                                                      "Types" : {
                                                         "description" : "List of package types.",
                                                         "items" : {
                                                            "enum" : [
                                                               "deb",
                                                               "deb-src"
                                                            ],
                                                            "type" : "string"
                                                         },
                                                         "type" : "array"
                                                      },
                                                      "URIs" : {
                                                         "description" : "List of repository URIs.",
                                                         "items" : {
                                                            "type" : "string"
                                                         },
                                                         "type" : "array"
                                                      }
                                                   },
                                                   "type" : "object"
                                                },
                                                "type" : "array"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    },
                                    "infos" : {
                                       "description" : "Additional information/warnings for APT repositories.",
                                       "items" : {
                                          "properties" : {
                                             "index" : {
                                                "description" : "Index of the associated repository within the file.",
                                                "type" : "string"
                                             },
                                             "kind" : {
                                                "description" : "Kind of the information (e.g. warning).",
                                                "type" : "string"
                                             },
                                             "message" : {
                                                "description" : "Information message.",
                                                "type" : "string"
                                             },
                                             "path" : {
                                                "description" : "Path to the associated file.",
                                                "type" : "string"
                                             },
                                             "property" : {
                                                "description" : "Property from which the info originates.",
                                                "optional" : 1,
                                                "type" : "string"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    },
                                    "standard-repos" : {
                                       "description" : "List of standard repositories and their configuration status",
                                       "items" : {
                                          "properties" : {
                                             "description" : {
                                                "description" : "Description of the repository.",
                                                "type" : "string"
                                             },
                                             "handle" : {
                                                "description" : "Handle to identify the repository.",
                                                "type" : "string"
                                             },
                                             "name" : {
                                                "description" : "Display name of the repository.",
                                                "type" : "string"
                                             },
                                             "status" : {
                                                "description" : "Indicating enabled/disabled status, if the repository is configured.",
                                                "optional" : 1,
                                                "type" : "boolean"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "type" : "array"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "POST" : {
                              "allowtoken" : 1,
                              "description" : "Change the properties of a repository. Currently only allows enabling/disabling.",
                              "method" : "POST",
                              "name" : "change_repository",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "digest" : {
                                       "description" : "Digest to detect modifications.",
                                       "maxLength" : 80,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "enabled" : {
                                       "description" : "Whether the repository should be enabled or not.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "index" : {
                                       "description" : "Index within the file (starting from 0).",
                                       "type" : "integer",
                                       "typetext" : "<integer>"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "path" : {
                                       "description" : "Path to the containing file.",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "PUT" : {
                              "allowtoken" : 1,
                              "description" : "Add a standard repository to the configuration",
                              "method" : "PUT",
                              "name" : "add_repository",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "digest" : {
                                       "description" : "Digest to detect modifications.",
                                       "maxLength" : 80,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "handle" : {
                                       "description" : "Handle that identifies a repository.",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/apt/repositories",
                        "text" : "repositories"
                     },
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Get package information for important Proxmox packages.",
                              "method" : "GET",
                              "name" : "versions",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "proxyto" : "node",
                              "returns" : {
                                 "items" : {
                                    "properties" : {},
                                    "type" : "object"
                                 },
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/apt/versions",
                        "text" : "versions"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Directory index for apt (Advanced Package Tool).",
                        "method" : "GET",
                        "name" : "index",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "user" : "all"
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "id" : {
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{id}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/apt",
                  "text" : "apt"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Get the detailed syslog entries for a specific mail ID.",
                              "method" : "GET",
                              "name" : "maillog",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "endtime" : {
                                       "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                                       "minimum" : 1,
                                       "optional" : 1,
                                       "type" : "integer",
                                       "typetext" : "<integer> (1 - N)"
                                    },
                                    "id" : {
                                       "description" : "Mail ID (as returned by the list API).",
                                       "maxLength" : 64,
                                       "minLength" : 3,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "starttime" : {
                                       "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                                       "minimum" : 0,
                                       "optional" : 1,
                                       "type" : "integer",
                                       "typetext" : "<integer> (0 - N)"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "audit"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "properties" : {
                                    "client" : {
                                       "description" : "Client address",
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "dstatus" : {
                                       "description" : "Delivery status.",
                                       "maxLength" : 1,
                                       "minLength" : 1,
                                       "type" : "string"
                                    },
                                    "from" : {
                                       "description" : "Sender email address.",
                                       "type" : "string"
                                    },
                                    "id" : {
                                       "description" : "Unique ID.",
                                       "type" : "string"
                                    },
                                    "logs" : {
                                       "items" : {
                                          "type" : "string"
                                       },
                                       "type" : "array"
                                    },
                                    "msgid" : {
                                       "description" : "SMTP message ID.",
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "qid" : {
                                       "description" : "Postfix qmgr ID.",
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "relay" : {
                                       "description" : "ID of relayed mail.",
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "rstatus" : {
                                       "description" : "Delivery status of relayed mail.",
                                       "maxLength" : 1,
                                       "minLength" : 1,
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "size" : {
                                       "description" : "The size of the raw email.",
                                       "optional" : 1,
                                       "type" : "number"
                                    },
                                    "time" : {
                                       "description" : "Delivery timestamp.",
                                       "type" : "integer"
                                    },
                                    "to" : {
                                       "description" : "Receiver email address.",
                                       "type" : "string"
                                    }
                                 },
                                 "type" : "object"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/tracker/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read mail list.",
                        "method" : "GET",
                        "name" : "list_mails",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "endtime" : {
                                 "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                                 "minimum" : 1,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (1 - N)"
                              },
                              "from" : {
                                 "description" : "Sender email address filter.",
                                 "maxLength" : 256,
                                 "minLength" : 1,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "greylist" : {
                                 "default" : 0,
                                 "description" : "Include Greylisted entries.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "ndr" : {
                                 "default" : 0,
                                 "description" : "Include NDRs (non delivery reports).",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "starttime" : {
                                 "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "target" : {
                                 "description" : "Receiver email address filter.",
                                 "maxLength" : 256,
                                 "minLength" : 1,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "xfilter" : {
                                 "description" : "Only include mails containing this filter string.",
                                 "maxLength" : 256,
                                 "minLength" : 1,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "client" : {
                                    "description" : "Client address",
                                    "optional" : 1,
                                    "type" : "string"
                                 },
                                 "dstatus" : {
                                    "description" : "Delivery status.",
                                    "maxLength" : 1,
                                    "minLength" : 1,
                                    "type" : "string"
                                 },
                                 "from" : {
                                    "description" : "Sender email address.",
                                    "type" : "string"
                                 },
                                 "id" : {
                                    "description" : "Unique ID.",
                                    "type" : "string"
                                 },
                                 "msgid" : {
                                    "description" : "SMTP message ID.",
                                    "optional" : 1,
                                    "type" : "string"
                                 },
                                 "qid" : {
                                    "description" : "Postfix qmgr ID.",
                                    "optional" : 1,
                                    "type" : "string"
                                 },
                                 "relay" : {
                                    "description" : "ID of relayed mail.",
                                    "optional" : 1,
                                    "type" : "string"
                                 },
                                 "rstatus" : {
                                    "description" : "Delivery status of relayed mail.",
                                    "maxLength" : 1,
                                    "minLength" : 1,
                                    "optional" : 1,
                                    "type" : "string"
                                 },
                                 "size" : {
                                    "description" : "The size of the raw email.",
                                    "optional" : 1,
                                    "type" : "number"
                                 },
                                 "time" : {
                                    "description" : "Delivery timestamp.",
                                    "type" : "integer"
                                 },
                                 "to" : {
                                    "description" : "Receiver email address.",
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{id}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/tracker",
                  "text" : "tracker"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "DELETE" : {
                              "allowtoken" : 1,
                              "description" : "Delete a backup file.",
                              "method" : "DELETE",
                              "name" : "delete",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "filename" : {
                                       "description" : "The backup file name.",
                                       "maxLength" : 256,
                                       "minLength" : 4,
                                       "pattern" : "pmg-backup_[0-9A-Za-z_-]+\\.tgz",
                                       "type" : "string"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Download a backup file.",
                              "download" : 1,
                              "method" : "GET",
                              "name" : "download",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "filename" : {
                                       "description" : "The backup file name.",
                                       "maxLength" : 256,
                                       "minLength" : 4,
                                       "pattern" : "pmg-backup_[0-9A-Za-z_-]+\\.tgz",
                                       "type" : "string"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "string"
                              }
                           },
                           "POST" : {
                              "allowtoken" : 1,
                              "description" : "Restore the system configuration.",
                              "method" : "POST",
                              "name" : "restore",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "config" : {
                                       "default" : 0,
                                       "description" : "Restore system configuration.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "database" : {
                                       "default" : 1,
                                       "description" : "Restore the rule database. This is the default.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "filename" : {
                                       "description" : "The backup file name.",
                                       "maxLength" : 256,
                                       "minLength" : 4,
                                       "pattern" : "pmg-backup_[0-9A-Za-z_-]+\\.tgz",
                                       "type" : "string"
                                    },
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "statistic" : {
                                       "default" : 0,
                                       "description" : "Restore statistic databases. Only considered when you restore the 'database'.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin"
                                 ]
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "type" : "string"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/backup/{filename}",
                        "text" : "{filename}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "List all stored backups (files named proxmox-backup_{DATE}.tgz).",
                        "method" : "GET",
                        "name" : "list",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "filename" : {
                                    "description" : "The backup file name.",
                                    "maxLength" : 256,
                                    "minLength" : 4,
                                    "pattern" : "pmg-backup_[0-9A-Za-z_-]+\\.tgz",
                                    "type" : "string"
                                 },
                                 "size" : {
                                    "description" : "Size of backup file in bytes.",
                                    "type" : "integer"
                                 },
                                 "timestamp" : {
                                    "description" : "Backup timestamp (Unix epoch).",
                                    "type" : "integer"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{filename}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Backup the system configuration.",
                        "method" : "POST",
                        "name" : "backup",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "notify" : {
                                 "default" : "never",
                                 "description" : "Specify when to notify via e-mail",
                                 "enum" : [
                                    "always",
                                    "error",
                                    "never"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "statistic" : {
                                 "default" : 1,
                                 "description" : "Backup statistic databases.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "string"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/backup",
                  "text" : "backup"
               },
               {
                  "children" : [
                     {
                        "children" : [
                           {
                              "children" : [
                                 {
                                    "children" : [
                                       {
                                          "info" : {
                                             "DELETE" : {
                                                "allowtoken" : 1,
                                                "description" : "Forget a snapshot",
                                                "method" : "DELETE",
                                                "name" : "forget_snapshot",
                                                "parameters" : {
                                                   "additionalProperties" : 0,
                                                   "properties" : {
                                                      "backup-id" : {
                                                         "description" : "ID (hostname) of backup snapshot",
                                                         "type" : "string",
                                                         "typetext" : "<string>"
                                                      },
                                                      "backup-time" : {
                                                         "description" : "Backup time in RFC 3339 format",
                                                         "type" : "string",
                                                         "typetext" : "<string>"
                                                      },
                                                      "node" : {
                                                         "description" : "The cluster node name.",
                                                         "format" : "pve-node",
                                                         "type" : "string",
                                                         "typetext" : "<string>"
                                                      },
                                                      "remote" : {
                                                         "description" : "Proxmox Backup Server ID.",
                                                         "format" : "pve-configid",
                                                         "type" : "string",
                                                         "typetext" : "<string>"
                                                      }
                                                   }
                                                },
                                                "permissions" : {
                                                   "check" : [
                                                      "admin",
                                                      "audit"
                                                   ]
                                                },
                                                "protected" : 1,
                                                "proxyto" : "node",
                                                "returns" : {
                                                   "type" : "null"
                                                }
                                             },
                                             "POST" : {
                                                "allowtoken" : 1,
                                                "description" : "Restore the system configuration.",
                                                "method" : "POST",
                                                "name" : "restore",
                                                "parameters" : {
                                                   "additionalProperties" : 0,
                                                   "properties" : {
                                                      "backup-id" : {
                                                         "description" : "backup-id (hostname) of backup snapshot",
                                                         "type" : "string",
                                                         "typetext" : "<string>"
                                                      },
                                                      "backup-time" : {
                                                         "description" : "backup-time to restore",
                                                         "type" : "string",
                                                         "typetext" : "<string>"
                                                      },
                                                      "config" : {
                                                         "default" : 0,
                                                         "description" : "Restore system configuration.",
                                                         "optional" : 1,
                                                         "type" : "boolean",
                                                         "typetext" : "<boolean>"
                                                      },
                                                      "database" : {
                                                         "default" : 1,
                                                         "description" : "Restore the rule database. This is the default.",
                                                         "optional" : 1,
                                                         "type" : "boolean",
                                                         "typetext" : "<boolean>"
                                                      },
                                                      "node" : {
                                                         "description" : "The cluster node name.",
                                                         "format" : "pve-node",
                                                         "type" : "string",
                                                         "typetext" : "<string>"
                                                      },
                                                      "remote" : {
                                                         "description" : "Proxmox Backup Server ID.",
                                                         "format" : "pve-configid",
                                                         "type" : "string",
                                                         "typetext" : "<string>"
                                                      },
                                                      "statistic" : {
                                                         "default" : 0,
                                                         "description" : "Restore statistic databases. Only considered when you restore the 'database'.",
                                                         "optional" : 1,
                                                         "type" : "boolean",
                                                         "typetext" : "<boolean>"
                                                      }
                                                   }
                                                },
                                                "permissions" : {
                                                   "check" : [
                                                      "admin"
                                                   ]
                                                },
                                                "protected" : 1,
                                                "proxyto" : "node",
                                                "returns" : {
                                                   "type" : "string"
                                                }
                                             }
                                          },
                                          "leaf" : 1,
                                          "path" : "/nodes/{node}/pbs/{remote}/snapshot/{backup-id}/{backup-time}",
                                          "text" : "{backup-time}"
                                       }
                                    ],
                                    "info" : {
                                       "GET" : {
                                          "allowtoken" : 1,
                                          "description" : "Get snapshots from a specific ID stored on remote.",
                                          "method" : "GET",
                                          "name" : "get_group_snapshots",
                                          "parameters" : {
                                             "additionalProperties" : 0,
                                             "properties" : {
                                                "backup-id" : {
                                                   "description" : "ID (hostname) of backup snapshot",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "node" : {
                                                   "description" : "The cluster node name.",
                                                   "format" : "pve-node",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                },
                                                "remote" : {
                                                   "description" : "Proxmox Backup Server ID.",
                                                   "format" : "pve-configid",
                                                   "type" : "string",
                                                   "typetext" : "<string>"
                                                }
                                             }
                                          },
                                          "permissions" : {
                                             "check" : [
                                                "admin",
                                                "audit"
                                             ]
                                          },
                                          "protected" : 1,
                                          "proxyto" : "node",
                                          "returns" : {
                                             "items" : {
                                                "properties" : {
                                                   "backup-id" : {
                                                      "type" : "string"
                                                   },
                                                   "backup-time" : {
                                                      "type" : "string"
                                                   },
                                                   "ctime" : {
                                                      "type" : "string"
                                                   },
                                                   "size" : {
                                                      "type" : "integer"
                                                   }
                                                },
                                                "type" : "object"
                                             },
                                             "links" : [
                                                {
                                                   "href" : "{backup-time}",
                                                   "rel" : "child"
                                                }
                                             ],
                                             "type" : "array"
                                          }
                                       }
                                    },
                                    "leaf" : 0,
                                    "path" : "/nodes/{node}/pbs/{remote}/snapshot/{backup-id}",
                                    "text" : "{backup-id}"
                                 }
                              ],
                              "info" : {
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Get snapshots stored on remote.",
                                    "method" : "GET",
                                    "name" : "get_snapshots",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "remote" : {
                                             "description" : "Proxmox Backup Server ID.",
                                             "format" : "pve-configid",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "items" : {
                                          "properties" : {
                                             "backup-id" : {
                                                "type" : "string"
                                             },
                                             "backup-time" : {
                                                "type" : "string"
                                             },
                                             "ctime" : {
                                                "type" : "string"
                                             },
                                             "size" : {
                                                "type" : "integer"
                                             }
                                          },
                                          "type" : "object"
                                       },
                                       "links" : [
                                          {
                                             "href" : "{backup-id}",
                                             "rel" : "child"
                                          }
                                       ],
                                       "type" : "array"
                                    }
                                 },
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Create a new backup and prune the backup group afterwards, if configured.",
                                    "method" : "POST",
                                    "name" : "run_backup",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "notify" : {
                                             "default" : "never",
                                             "description" : "Specify when to notify via e-mail",
                                             "enum" : [
                                                "always",
                                                "error",
                                                "never"
                                             ],
                                             "optional" : 1,
                                             "type" : "string"
                                          },
                                          "remote" : {
                                             "description" : "Proxmox Backup Server ID.",
                                             "format" : "pve-configid",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "statistic" : {
                                             "default" : 1,
                                             "description" : "Backup statistic databases.",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "string"
                                    }
                                 }
                              },
                              "leaf" : 0,
                              "path" : "/nodes/{node}/pbs/{remote}/snapshot",
                              "text" : "snapshot"
                           },
                           {
                              "info" : {
                                 "DELETE" : {
                                    "allowtoken" : 1,
                                    "description" : "Delete backup schedule",
                                    "method" : "DELETE",
                                    "name" : "delete_timer",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "remote" : {
                                             "description" : "Proxmox Backup Server ID.",
                                             "format" : "pve-configid",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 },
                                 "GET" : {
                                    "allowtoken" : 1,
                                    "description" : "Get timer specification",
                                    "method" : "GET",
                                    "name" : "list_timer",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "remote" : {
                                             "description" : "Proxmox Backup Server ID.",
                                             "format" : "pve-configid",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "properties" : {
                                          "delay" : {
                                             "default" : "5min",
                                             "description" : "Randomized delay to add to the starttime (RandomizedDelaySec setting of the systemd.timer)",
                                             "optional" : 1,
                                             "pattern" : "[0-9a-zA-Z. ]+",
                                             "type" : "string"
                                          },
                                          "next-run" : {
                                             "description" : "The date time of the next run, in server locale.",
                                             "optional" : 1,
                                             "type" : "string"
                                          },
                                          "remote" : {
                                             "description" : "Proxmox Backup Server remote ID.",
                                             "format" : "pve-configid",
                                             "optional" : 1,
                                             "type" : "string"
                                          },
                                          "schedule" : {
                                             "default" : "daily",
                                             "description" : "Schedule for the backup (OnCalendar setting of the systemd.timer)",
                                             "optional" : 1,
                                             "pattern" : "[0-9a-zA-Z*.:,\\-/ ]+",
                                             "type" : "string"
                                          },
                                          "unitfile" : {
                                             "description" : "unit file for the systemd.timer unit",
                                             "optional" : 1,
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 },
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Create backup schedule",
                                    "method" : "POST",
                                    "name" : "create_timer",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "delay" : {
                                             "default" : "5min",
                                             "description" : "Randomized delay to add to the starttime (RandomizedDelaySec setting of the systemd.timer)",
                                             "optional" : 1,
                                             "pattern" : "[0-9a-zA-Z. ]+",
                                             "type" : "string"
                                          },
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "remote" : {
                                             "description" : "Proxmox Backup Server ID.",
                                             "format" : "pve-configid",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "schedule" : {
                                             "default" : "daily",
                                             "description" : "Schedule for the backup (OnCalendar setting of the systemd.timer)",
                                             "optional" : 1,
                                             "pattern" : "[0-9a-zA-Z*.:,\\-/ ]+",
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin",
                                          "audit"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/pbs/{remote}/timer",
                              "text" : "timer"
                           }
                        ],
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Backup Job index.",
                              "method" : "GET",
                              "name" : "remote_index",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "remote" : {
                                       "description" : "Proxmox Backup Server ID.",
                                       "format" : "pve-configid",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "section" : {
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{section}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/nodes/{node}/pbs/{remote}",
                        "text" : "{remote}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "List all configured Proxmox Backup Server jobs.",
                        "method" : "GET",
                        "name" : "list",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "additionalProperties" : 0,
                              "properties" : {
                                 "datastore" : {
                                    "description" : "Proxmox Backup Server datastore name.",
                                    "optional" : 0,
                                    "type" : "string"
                                 },
                                 "disable" : {
                                    "description" : "Flag to disable (deactivate) the entry.",
                                    "optional" : 1,
                                    "type" : "boolean"
                                 },
                                 "fingerprint" : {
                                    "description" : "Certificate SHA 256 fingerprint.",
                                    "optional" : 1,
                                    "pattern" : "([A-Fa-f0-9]{2}:){31}[A-Fa-f0-9]{2}",
                                    "type" : "string"
                                 },
                                 "include-statistics" : {
                                    "description" : "Include statistics in scheduled backups",
                                    "optional" : 1,
                                    "type" : "boolean"
                                 },
                                 "keep-daily" : {
                                    "description" : "Keep backups for the last <N> different days. If there is more than one backup for a single day, only the latest one is kept.",
                                    "format_description" : "N",
                                    "minimum" : "0",
                                    "optional" : 1,
                                    "type" : "integer"
                                 },
                                 "keep-hourly" : {
                                    "description" : "Keep backups for the last <N> different hours. If there is more than one backup for a single hour, only the latest one is kept.",
                                    "format_description" : "N",
                                    "minimum" : "0",
                                    "optional" : 1,
                                    "type" : "integer"
                                 },
                                 "keep-last" : {
                                    "description" : "Keep the last <N> backups.",
                                    "format_description" : "N",
                                    "minimum" : "0",
                                    "optional" : 1,
                                    "type" : "integer"
                                 },
                                 "keep-monthly" : {
                                    "description" : "Keep backups for the last <N> different months. If there is more than one backup for a single month, only the latest one is kept.",
                                    "format_description" : "N",
                                    "minimum" : "0",
                                    "optional" : 1,
                                    "type" : "integer"
                                 },
                                 "keep-weekly" : {
                                    "description" : "Keep backups for the last <N> different weeks. If there ismore than one backup for a single week, only the latest one is kept.",
                                    "format_description" : "N",
                                    "minimum" : "0",
                                    "optional" : 1,
                                    "type" : "integer"
                                 },
                                 "keep-yearly" : {
                                    "description" : "Keep backups for the last <N> different years. If there is more than one backup for a single year, only the latest one is kept.",
                                    "format_description" : "N",
                                    "minimum" : "0",
                                    "optional" : 1,
                                    "type" : "integer"
                                 },
                                 "notify" : {
                                    "description" : "Specify when to notify via e-mail",
                                    "enum" : [
                                       "always",
                                       "error",
                                       "never"
                                    ],
                                    "optional" : 1,
                                    "type" : "string"
                                 },
                                 "password" : {
                                    "description" : "Password or API token secret for the user on the Proxmox Backup Server.",
                                    "optional" : 1,
                                    "type" : "string"
                                 },
                                 "remote" : {
                                    "description" : "Proxmox Backup Server ID.",
                                    "format" : "pve-configid",
                                    "type" : "string"
                                 },
                                 "server" : {
                                    "description" : "Proxmox Backup Server address.",
                                    "format" : "address",
                                    "maxLength" : 256,
                                    "optional" : 0,
                                    "type" : "string"
                                 },
                                 "username" : {
                                    "description" : "Username or API token ID on the Proxmox Backup Server",
                                    "maxLength" : 512,
                                    "minLength" : 3,
                                    "optional" : 1,
                                    "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{remote}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/pbs",
                  "text" : "pbs"
               },
               {
                  "children" : [
                     {
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Get information about the node's certificates.",
                              "method" : "GET",
                              "name" : "info",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "user" : "all"
                              },
                              "protected" : 1,
                              "proxyto" : "node",
                              "returns" : {
                                 "items" : {
                                    "properties" : {
                                       "filename" : {
                                          "optional" : 1,
                                          "type" : "string"
                                       },
                                       "fingerprint" : {
                                          "description" : "Certificate SHA 256 fingerprint.",
                                          "optional" : 1,
                                          "pattern" : "([A-Fa-f0-9]{2}:){31}[A-Fa-f0-9]{2}",
                                          "type" : "string"
                                       },
                                       "issuer" : {
                                          "description" : "Certificate issuer name.",
                                          "optional" : 1,
                                          "type" : "string"
                                       },
                                       "notafter" : {
                                          "description" : "Certificate's notAfter timestamp (UNIX epoch).",
                                          "optional" : 1,
                                          "renderer" : "timestamp",
                                          "type" : "integer"
                                       },
                                       "notbefore" : {
                                          "description" : "Certificate's notBefore timestamp (UNIX epoch).",
                                          "optional" : 1,
                                          "renderer" : "timestamp",
                                          "type" : "integer"
                                       },
                                       "pem" : {
                                          "description" : "Certificate in PEM format",
                                          "format" : "pem-certificate",
                                          "optional" : 1,
                                          "type" : "string"
                                       },
                                       "public-key-bits" : {
                                          "description" : "Certificate's public key size",
                                          "optional" : 1,
                                          "type" : "integer"
                                       },
                                       "public-key-type" : {
                                          "description" : "Certificate's public key algorithm",
                                          "optional" : 1,
                                          "type" : "string"
                                       },
                                       "san" : {
                                          "description" : "List of Certificate's SubjectAlternativeName entries.",
                                          "items" : {
                                             "type" : "string"
                                          },
                                          "optional" : 1,
                                          "renderer" : "yaml",
                                          "type" : "array"
                                       },
                                       "subject" : {
                                          "description" : "Certificate subject name.",
                                          "optional" : 1,
                                          "type" : "string"
                                       }
                                    },
                                    "type" : "object"
                                 },
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/nodes/{node}/certificates/info",
                        "text" : "info"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "DELETE" : {
                                    "allowtoken" : 1,
                                    "description" : "DELETE custom certificate chain and key.",
                                    "method" : "DELETE",
                                    "name" : "remove_custom_cert",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "restart" : {
                                             "default" : 0,
                                             "description" : "Restart pmgproxy.",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          },
                                          "type" : {
                                             "description" : "The TLS certificate type (API or SMTP certificate).",
                                             "enum" : [
                                                "api",
                                                "smtp"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "null"
                                    }
                                 },
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Upload or update custom certificate chain and key.",
                                    "method" : "POST",
                                    "name" : "upload_custom_cert",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "certificates" : {
                                             "description" : "PEM encoded certificate (chain).",
                                             "format" : "pem-certificate-chain",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "force" : {
                                             "default" : 0,
                                             "description" : "Overwrite existing custom or ACME certificate files.",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          },
                                          "key" : {
                                             "description" : "PEM encoded private key.",
                                             "format" : "pem-string",
                                             "optional" : 0,
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "restart" : {
                                             "default" : 0,
                                             "description" : "Restart services.",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          },
                                          "type" : {
                                             "description" : "The TLS certificate type (API or SMTP certificate).",
                                             "enum" : [
                                                "api",
                                                "smtp"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "properties" : {
                                          "filename" : {
                                             "optional" : 1,
                                             "type" : "string"
                                          },
                                          "fingerprint" : {
                                             "description" : "Certificate SHA 256 fingerprint.",
                                             "optional" : 1,
                                             "pattern" : "([A-Fa-f0-9]{2}:){31}[A-Fa-f0-9]{2}",
                                             "type" : "string"
                                          },
                                          "issuer" : {
                                             "description" : "Certificate issuer name.",
                                             "optional" : 1,
                                             "type" : "string"
                                          },
                                          "notafter" : {
                                             "description" : "Certificate's notAfter timestamp (UNIX epoch).",
                                             "optional" : 1,
                                             "renderer" : "timestamp",
                                             "type" : "integer"
                                          },
                                          "notbefore" : {
                                             "description" : "Certificate's notBefore timestamp (UNIX epoch).",
                                             "optional" : 1,
                                             "renderer" : "timestamp",
                                             "type" : "integer"
                                          },
                                          "pem" : {
                                             "description" : "Certificate in PEM format",
                                             "format" : "pem-certificate",
                                             "optional" : 1,
                                             "type" : "string"
                                          },
                                          "public-key-bits" : {
                                             "description" : "Certificate's public key size",
                                             "optional" : 1,
                                             "type" : "integer"
                                          },
                                          "public-key-type" : {
                                             "description" : "Certificate's public key algorithm",
                                             "optional" : 1,
                                             "type" : "string"
                                          },
                                          "san" : {
                                             "description" : "List of Certificate's SubjectAlternativeName entries.",
                                             "items" : {
                                                "type" : "string"
                                             },
                                             "optional" : 1,
                                             "renderer" : "yaml",
                                             "type" : "array"
                                          },
                                          "subject" : {
                                             "description" : "Certificate subject name.",
                                             "optional" : 1,
                                             "type" : "string"
                                          }
                                       },
                                       "type" : "object"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/certificates/custom/{type}",
                              "text" : "{type}"
                           }
                        ],
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "Certificate index.",
                              "method" : "GET",
                              "name" : "custom_cert_index",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "user" : "all"
                              },
                              "returns" : {
                                 "items" : {
                                    "properties" : {},
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{type}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/nodes/{node}/certificates/custom",
                        "text" : "custom"
                     },
                     {
                        "children" : [
                           {
                              "info" : {
                                 "DELETE" : {
                                    "allowtoken" : 1,
                                    "description" : "Revoke existing certificate from CA.",
                                    "method" : "DELETE",
                                    "name" : "revoke_acme_cert",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "type" : {
                                             "description" : "The TLS certificate type (API or SMTP certificate).",
                                             "enum" : [
                                                "api",
                                                "smtp"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "string"
                                    }
                                 },
                                 "POST" : {
                                    "allowtoken" : 1,
                                    "description" : "Order a new certificate from ACME-compatible CA.",
                                    "method" : "POST",
                                    "name" : "new_acme_cert",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "force" : {
                                             "default" : 0,
                                             "description" : "Overwrite existing custom certificate.",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          },
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "type" : {
                                             "description" : "The TLS certificate type (API or SMTP certificate).",
                                             "enum" : [
                                                "api",
                                                "smtp"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "string"
                                    }
                                 },
                                 "PUT" : {
                                    "allowtoken" : 1,
                                    "description" : "Renew existing certificate from CA.",
                                    "method" : "PUT",
                                    "name" : "renew_acme_cert",
                                    "parameters" : {
                                       "additionalProperties" : 0,
                                       "properties" : {
                                          "force" : {
                                             "default" : 0,
                                             "description" : "Force renewal even if expiry is more than 30 days away.",
                                             "optional" : 1,
                                             "type" : "boolean",
                                             "typetext" : "<boolean>"
                                          },
                                          "node" : {
                                             "description" : "The cluster node name.",
                                             "format" : "pve-node",
                                             "type" : "string",
                                             "typetext" : "<string>"
                                          },
                                          "type" : {
                                             "description" : "The TLS certificate type (API or SMTP certificate).",
                                             "enum" : [
                                                "api",
                                                "smtp"
                                             ],
                                             "type" : "string"
                                          }
                                       }
                                    },
                                    "permissions" : {
                                       "check" : [
                                          "admin"
                                       ]
                                    },
                                    "protected" : 1,
                                    "proxyto" : "node",
                                    "returns" : {
                                       "type" : "string"
                                    }
                                 }
                              },
                              "leaf" : 1,
                              "path" : "/nodes/{node}/certificates/acme/{type}",
                              "text" : "{type}"
                           }
                        ],
                        "info" : {
                           "GET" : {
                              "allowtoken" : 1,
                              "description" : "ACME Certificate index.",
                              "method" : "GET",
                              "name" : "acme_cert_index",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "node" : {
                                       "description" : "The cluster node name.",
                                       "format" : "pve-node",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "user" : "all"
                              },
                              "returns" : {
                                 "items" : {
                                    "properties" : {},
                                    "type" : "object"
                                 },
                                 "links" : [
                                    {
                                       "href" : "{type}",
                                       "rel" : "child"
                                    }
                                 ],
                                 "type" : "array"
                              }
                           }
                        },
                        "leaf" : 0,
                        "path" : "/nodes/{node}/certificates/acme",
                        "text" : "acme"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Node index.",
                        "method" : "GET",
                        "name" : "index",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "user" : "all"
                        },
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "links" : [
                              {
                                 "href" : "{name}",
                                 "rel" : "child"
                              }
                           ],
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/nodes/{node}/certificates",
                  "text" : "certificates"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Get node configuration options.",
                        "method" : "GET",
                        "name" : "get_config",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "acme" : {
                                 "description" : "Node specific ACME settings.",
                                 "format" : {
                                    "account" : {
                                       "default" : "default",
                                       "description" : "ACME account config file name.",
                                       "format" : "pve-configid",
                                       "format_description" : "name",
                                       "optional" : 1,
                                       "type" : "string"
                                    }
                                 },
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "acmedomain[n]" : {
                                 "description" : "ACME domain and validation plugin",
                                 "format" : {
                                    "alias" : {
                                       "description" : "Alias for the Domain to verify ACME Challenge over DNS",
                                       "format" : "pmg-acme-alias",
                                       "format_description" : "domain",
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "domain" : {
                                       "default_key" : 1,
                                       "description" : "domain for this node's ACME certificate",
                                       "format" : "pmg-acme-domain",
                                       "format_description" : "domain",
                                       "type" : "string"
                                    },
                                    "plugin" : {
                                       "default" : "standalone",
                                       "description" : "The ACME plugin ID",
                                       "format" : "pve-configid",
                                       "format_description" : "name of the plugin configuration",
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "usage" : {
                                       "description" : "Whether this domain is used for the API, SMTP or both",
                                       "format" : "pmg-certificate-type-list",
                                       "format_description" : "usage list",
                                       "type" : "string"
                                    }
                                 },
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "digest" : {
                                 "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                                 "maxLength" : 40,
                                 "optional" : 1,
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "allowtoken" : 1,
                        "description" : "Set node configuration options.",
                        "method" : "PUT",
                        "name" : "set_config",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "acme" : {
                                 "description" : "Node specific ACME settings.",
                                 "format" : {
                                    "account" : {
                                       "default" : "default",
                                       "description" : "ACME account config file name.",
                                       "format" : "pve-configid",
                                       "format_description" : "name",
                                       "optional" : 1,
                                       "type" : "string"
                                    }
                                 },
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "[account=<name>]"
                              },
                              "acmedomain[n]" : {
                                 "description" : "ACME domain and validation plugin",
                                 "format" : {
                                    "alias" : {
                                       "description" : "Alias for the Domain to verify ACME Challenge over DNS",
                                       "format" : "pmg-acme-alias",
                                       "format_description" : "domain",
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "domain" : {
                                       "default_key" : 1,
                                       "description" : "domain for this node's ACME certificate",
                                       "format" : "pmg-acme-domain",
                                       "format_description" : "domain",
                                       "type" : "string"
                                    },
                                    "plugin" : {
                                       "default" : "standalone",
                                       "description" : "The ACME plugin ID",
                                       "format" : "pve-configid",
                                       "format_description" : "name of the plugin configuration",
                                       "optional" : 1,
                                       "type" : "string"
                                    },
                                    "usage" : {
                                       "description" : "Whether this domain is used for the API, SMTP or both",
                                       "format" : "pmg-certificate-type-list",
                                       "format_description" : "usage list",
                                       "type" : "string"
                                    }
                                 },
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "[domain=]<domain> ,usage=<usage list> [,alias=<domain>] [,plugin=<name of the plugin configuration>]"
                              },
                              "delete" : {
                                 "description" : "A list of settings you want to delete.",
                                 "format" : "pve-configid-list",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "digest" : {
                                 "description" : "Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.",
                                 "maxLength" : 40,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           },
                           "type" : "object"
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/config",
                  "text" : "config"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Gather various system information about a node",
                        "method" : "GET",
                        "name" : "report",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "string"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/report",
                  "text" : "report"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read node RRD statistics",
                        "method" : "GET",
                        "name" : "rrddata",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "cf" : {
                                 "description" : "The RRD consolidation function",
                                 "enum" : [
                                    "AVERAGE",
                                    "MAX"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "timeframe" : {
                                 "description" : "Specify the time frame you are interested in.",
                                 "enum" : [
                                    "hour",
                                    "day",
                                    "week",
                                    "month",
                                    "year"
                                 ],
                                 "type" : "string"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "properties" : {},
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/rrddata",
                  "text" : "rrddata"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read system log",
                        "method" : "GET",
                        "name" : "syslog",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "limit" : {
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "service" : {
                                 "description" : "Service ID",
                                 "maxLength" : 128,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "since" : {
                                 "description" : "Display all log since this date-time string.",
                                 "optional" : 1,
                                 "pattern" : "^\\d{4}-\\d{2}-\\d{2}( \\d{2}:\\d{2}(:\\d{2})?)?$",
                                 "type" : "string"
                              },
                              "start" : {
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "until" : {
                                 "description" : "Display all log until this date-time string.",
                                 "optional" : 1,
                                 "pattern" : "^\\d{4}-\\d{2}-\\d{2}( \\d{2}:\\d{2}(:\\d{2})?)?$",
                                 "type" : "string"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "properties" : {
                                 "n" : {
                                    "description" : "Line number",
                                    "type" : "integer"
                                 },
                                 "t" : {
                                    "description" : "Line text",
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/syslog",
                  "text" : "syslog"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read Journal",
                        "method" : "GET",
                        "name" : "journal",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "endcursor" : {
                                 "description" : "End before the given Cursor. Conflicts with 'until'.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "lastentries" : {
                                 "description" : "Limit to the last X lines. Conflicts with a range.",
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "since" : {
                                 "description" : "Display all log since this UNIX epoch. Conflicts with 'startcursor'.",
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "startcursor" : {
                                 "description" : "Start after the given Cursor. Conflicts with 'since'.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "until" : {
                                 "description" : "Display all log until this UNIX epoch. Conflicts with 'endcursor'.",
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "items" : {
                              "type" : "string"
                           },
                           "type" : "array"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/journal",
                  "text" : "journal"
               },
               {
                  "info" : {
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Creates a Terminal proxy.",
                        "method" : "POST",
                        "name" : "termproxy",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "cmd" : {
                                 "default" : "login",
                                 "description" : "Run specific command or default to login.",
                                 "enum" : [
                                    "login",
                                    "upgrade"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "cmd-opts" : {
                                 "default" : "",
                                 "description" : "Add parameters to a command. Encoded as null terminated strings.",
                                 "optional" : 1,
                                 "requires" : "cmd",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "returns" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "port" : {
                                 "type" : "integer"
                              },
                              "ticket" : {
                                 "type" : "string"
                              },
                              "upid" : {
                                 "type" : "string"
                              },
                              "user" : {
                                 "type" : "string"
                              }
                           }
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/termproxy",
                  "text" : "termproxy"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Opens a weksocket for VNC traffic.",
                        "method" : "GET",
                        "name" : "vncwebsocket",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "port" : {
                                 "description" : "Port number returned by previous vncproxy call.",
                                 "maximum" : 5999,
                                 "minimum" : 5900,
                                 "type" : "integer",
                                 "typetext" : "<integer> (5900 - 5999)"
                              },
                              "vncticket" : {
                                 "description" : "Ticket from previous call to vncproxy.",
                                 "maxLength" : 512,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "returns" : {
                           "properties" : {
                              "port" : {
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/vncwebsocket",
                  "text" : "vncwebsocket"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read DNS settings.",
                        "method" : "GET",
                        "name" : "dns",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "node",
                        "returns" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "dns1" : {
                                 "description" : "First name server IP address.",
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "dns2" : {
                                 "description" : "Second name server IP address.",
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "dns3" : {
                                 "description" : "Third name server IP address.",
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "search" : {
                                 "description" : "Search domain for host-name lookup.",
                                 "optional" : 1,
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "allowtoken" : 1,
                        "description" : "Write DNS settings.",
                        "method" : "PUT",
                        "name" : "update_dns",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "dns1" : {
                                 "description" : "First name server IP address.",
                                 "format" : "ip",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "dns2" : {
                                 "description" : "Second name server IP address.",
                                 "format" : "ip",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "dns3" : {
                                 "description" : "Third name server IP address.",
                                 "format" : "ip",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "search" : {
                                 "description" : "Search domain for host-name lookup.",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/dns",
                  "text" : "dns"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read server time and time zone settings.",
                        "method" : "GET",
                        "name" : "time",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "audit"
                           ]
                        },
                        "proxyto" : "node",
                        "returns" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "localtime" : {
                                 "description" : "Seconds since 1970-01-01 00:00:00 (local time)",
                                 "minimum" : 1297163644,
                                 "type" : "integer"
                              },
                              "time" : {
                                 "description" : "Seconds since 1970-01-01 00:00:00 UTC.",
                                 "minimum" : 1297163644,
                                 "type" : "integer"
                              },
                              "timezone" : {
                                 "description" : "Time zone",
                                 "type" : "string"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "allowtoken" : 1,
                        "description" : "Set time zone.",
                        "method" : "PUT",
                        "name" : "set_timezone",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "timezone" : {
                                 "description" : "Time zone. The file '/usr/share/zoneinfo/zone.tab' contains the list of valid names.",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/time",
                  "text" : "time"
               },
               {
                  "info" : {
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read server status. This is used by the cluster manager to test the node health.",
                        "method" : "GET",
                        "name" : "status",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "qmanager",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "additionalProperties" : 1,
                           "properties" : {
                              "insync" : {
                                 "description" : "Database is synced with other nodes.",
                                 "type" : "boolean"
                              },
                              "time" : {
                                 "description" : "Seconds since 1970-01-01 00:00:00 UTC.",
                                 "minimum" : 1297163644,
                                 "type" : "integer"
                              },
                              "uptime" : {
                                 "description" : "The uptime of the system in seconds.",
                                 "minimum" : 0,
                                 "type" : "integer"
                              }
                           },
                           "type" : "object"
                        }
                     },
                     "POST" : {
                        "allowtoken" : 1,
                        "description" : "Reboot or shutdown a node.",
                        "method" : "POST",
                        "name" : "node_cmd",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "command" : {
                                 "description" : "Specify the command.",
                                 "enum" : [
                                    "reboot",
                                    "shutdown"
                                 ],
                                 "type" : "string"
                              },
                              "node" : {
                                 "description" : "The cluster node name.",
                                 "format" : "pve-node",
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "node",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/nodes/{node}/status",
                  "text" : "status"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Node index.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "node" : {
                           "description" : "The cluster node name.",
                           "format" : "pve-node",
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "user" : "all"
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {},
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{name}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/nodes/{node}",
            "text" : "{node}"
         }
      ],
      "info" : {
         "GET" : {
            "allowtoken" : 1,
            "description" : "Cluster node index.",
            "method" : "GET",
            "name" : "index",
            "parameters" : {
               "additionalProperties" : 0
            },
            "permissions" : {
               "user" : "all"
            },
            "returns" : {
               "items" : {
                  "properties" : {},
                  "type" : "object"
               },
               "links" : [
                  {
                     "href" : "{node}",
                     "rel" : "child"
                  }
               ],
               "type" : "array"
            }
         }
      },
      "leaf" : 0,
      "path" : "/nodes",
      "text" : "nodes"
   },
   {
      "children" : [
         {
            "children" : [
               {
                  "info" : {
                     "DELETE" : {
                        "allowtoken" : 1,
                        "description" : "Delete a user.",
                        "method" : "DELETE",
                        "name" : "delete",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "userid" : {
                                 "description" : "User ID",
                                 "format" : "pmg-userid",
                                 "maxLength" : 64,
                                 "minLength" : 4,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     },
                     "GET" : {
                        "allowtoken" : 1,
                        "description" : "Read User data.",
                        "method" : "GET",
                        "name" : "read",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "userid" : {
                                 "description" : "User ID",
                                 "format" : "pmg-userid",
                                 "maxLength" : 64,
                                 "minLength" : 4,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "qmanager",
                              "audit"
                           ]
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "object"
                        }
                     },
                     "PUT" : {
                        "allowtoken" : 1,
                        "description" : "Update user data.",
                        "method" : "PUT",
                        "name" : "write",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "comment" : {
                                 "description" : "Comment.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "crypt_pass" : {
                                 "description" : "Encrypted password (see `man crypt`)",
                                 "optional" : 1,
                                 "pattern" : "\\$\\d\\$[a-zA-Z0-9\\.\\/]+\\$[a-zA-Z0-9\\.\\/]+",
                                 "type" : "string"
                              },
                              "delete" : {
                                 "description" : "A list of settings you want to delete.",
                                 "format" : "pve-configid-list",
                                 "maxLength" : 4096,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "email" : {
                                 "description" : "Users E-Mail address.",
                                 "format" : "email",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "enable" : {
                                 "default" : 0,
                                 "description" : "Flag to enable or disable the account.",
                                 "optional" : 1,
                                 "type" : "boolean",
                                 "typetext" : "<boolean>"
                              },
                              "expire" : {
                                 "default" : 0,
                                 "description" : "Account expiration date (seconds since epoch). '0' means no expiration date.",
                                 "minimum" : 0,
                                 "optional" : 1,
                                 "type" : "integer",
                                 "typetext" : "<integer> (0 - N)"
                              },
                              "firstname" : {
                                 "description" : "First name.",
                                 "maxLength" : 64,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "keys" : {
                                 "description" : "Keys for two factor auth (yubico).",
                                 "maxLength" : 128,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "lastname" : {
                                 "description" : "Last name.",
                                 "maxLength" : 64,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "password" : {
                                 "description" : "Password",
                                 "maxLength" : 32,
                                 "minLength" : 5,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "role" : {
                                 "description" : "User role. Role 'root' is reserved for the Unix Superuser.",
                                 "enum" : [
                                    "root",
                                    "admin",
                                    "helpdesk",
                                    "qmanager",
                                    "audit"
                                 ],
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "userid" : {
                                 "description" : "User ID",
                                 "format" : "pmg-userid",
                                 "maxLength" : 64,
                                 "minLength" : 4,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "type" : "null"
                        }
                     }
                  },
                  "leaf" : 1,
                  "path" : "/access/users/{userid}",
                  "text" : "{userid}"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "List users.",
                  "method" : "GET",
                  "name" : "index",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "comment" : {
                              "optional" : 1,
                              "type" : "string"
                           },
                           "enable" : {
                              "type" : "boolean"
                           },
                           "role" : {
                              "type" : "string"
                           },
                           "userid" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{userid}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               },
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Create new user",
                  "method" : "POST",
                  "name" : "create",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "comment" : {
                           "description" : "Comment.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "crypt_pass" : {
                           "description" : "Encrypted password (see `man crypt`)",
                           "optional" : 1,
                           "pattern" : "\\$\\d\\$[a-zA-Z0-9\\.\\/]+\\$[a-zA-Z0-9\\.\\/]+",
                           "type" : "string"
                        },
                        "email" : {
                           "description" : "Users E-Mail address.",
                           "format" : "email",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "enable" : {
                           "default" : 0,
                           "description" : "Flag to enable or disable the account.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        },
                        "expire" : {
                           "default" : 0,
                           "description" : "Account expiration date (seconds since epoch). '0' means no expiration date.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "firstname" : {
                           "description" : "First name.",
                           "maxLength" : 64,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "keys" : {
                           "description" : "Keys for two factor auth (yubico).",
                           "maxLength" : 128,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "lastname" : {
                           "description" : "Last name.",
                           "maxLength" : 64,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "password" : {
                           "description" : "Password",
                           "maxLength" : 32,
                           "minLength" : 5,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "role" : {
                           "description" : "User role. Role 'root' is reserved for the Unix Superuser.",
                           "enum" : [
                              "root",
                              "admin",
                              "helpdesk",
                              "qmanager",
                              "audit"
                           ],
                           "type" : "string"
                        },
                        "userid" : {
                           "description" : "User ID",
                           "format" : "pmg-userid",
                           "maxLength" : 64,
                           "minLength" : 4,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/access/users",
            "text" : "users"
         },
         {
            "children" : [
               {
                  "children" : [
                     {
                        "info" : {
                           "DELETE" : {
                              "allowtoken" : 0,
                              "description" : "Delete a TFA entry by ID.",
                              "method" : "DELETE",
                              "name" : "delete_tfa",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "A TFA entry id.",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "password" : {
                                       "description" : "The current password.",
                                       "maxLength" : 64,
                                       "minLength" : 5,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "userid" : {
                                       "description" : "User ID",
                                       "format" : "pmg-userid",
                                       "maxLength" : 64,
                                       "minLength" : 4,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "qmanager",
                                    "audit"
                                 ],
                                 "description" : "Each user is allowed to modify their own TFA entries. Only root can modify entries of another user."
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           },
                           "GET" : {
                              "allowtoken" : 0,
                              "description" : "Fetch a requested TFA entry if present.",
                              "method" : "GET",
                              "name" : "get_tfa_entry",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "id" : {
                                       "description" : "A TFA entry id.",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "userid" : {
                                       "description" : "User ID",
                                       "format" : "pmg-userid",
                                       "maxLength" : 64,
                                       "minLength" : 4,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "description" : "Each user is allowed to view their own TFA entries. Only root can view entries of another user.",
                                 "user" : "all"
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "description" : "TFA Entry.",
                                 "properties" : {
                                    "created" : {
                                       "description" : "Creation time of this entry as unix epoch.",
                                       "type" : "integer"
                                    },
                                    "description" : {
                                       "description" : "User chosen description for this entry.",
                                       "type" : "string"
                                    },
                                    "enable" : {
                                       "default" : 1,
                                       "description" : "Whether this TFA entry is currently enabled.",
                                       "optional" : 1,
                                       "type" : "boolean"
                                    },
                                    "id" : {
                                       "description" : "The id used to reference this entry.",
                                       "type" : "string"
                                    },
                                    "type" : {
                                       "description" : "TFA Entry Type.",
                                       "enum" : [
                                          "totp",
                                          "u2f",
                                          "webauthn",
                                          "recovery"
                                       ],
                                       "type" : "string"
                                    }
                                 },
                                 "type" : "object"
                              }
                           },
                           "PUT" : {
                              "allowtoken" : 0,
                              "description" : "Add a TFA entry for a user.",
                              "method" : "PUT",
                              "name" : "update_tfa_entry",
                              "parameters" : {
                                 "additionalProperties" : 0,
                                 "properties" : {
                                    "description" : {
                                       "description" : "A description to distinguish multiple entries from one another",
                                       "maxLength" : 255,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "enable" : {
                                       "description" : "Whether the entry should be enabled for login.",
                                       "optional" : 1,
                                       "type" : "boolean",
                                       "typetext" : "<boolean>"
                                    },
                                    "id" : {
                                       "description" : "A TFA entry id.",
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "password" : {
                                       "description" : "The current password.",
                                       "maxLength" : 64,
                                       "minLength" : 5,
                                       "optional" : 1,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    },
                                    "userid" : {
                                       "description" : "User ID",
                                       "format" : "pmg-userid",
                                       "maxLength" : 64,
                                       "minLength" : 4,
                                       "type" : "string",
                                       "typetext" : "<string>"
                                    }
                                 }
                              },
                              "permissions" : {
                                 "check" : [
                                    "admin",
                                    "qmanager",
                                    "audit"
                                 ],
                                 "description" : "Each user is allowed to modify their own TFA entries. Only root can modify entries of another user."
                              },
                              "protected" : 1,
                              "proxyto" : "master",
                              "returns" : {
                                 "type" : "null"
                              }
                           }
                        },
                        "leaf" : 1,
                        "path" : "/access/tfa/{userid}/{id}",
                        "text" : "{id}"
                     }
                  ],
                  "info" : {
                     "GET" : {
                        "allowtoken" : 0,
                        "description" : "List TFA configurations of users.",
                        "method" : "GET",
                        "name" : "list_user_tfa",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "userid" : {
                                 "description" : "User ID",
                                 "format" : "pmg-userid",
                                 "maxLength" : 64,
                                 "minLength" : 4,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "description" : "Each user is allowed to view their own TFA entries. Only root can view entries of another user.",
                           "user" : "all"
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "description" : "A list of the user's TFA entries.",
                           "items" : {
                              "description" : "TFA Entry.",
                              "properties" : {
                                 "created" : {
                                    "description" : "Creation time of this entry as unix epoch.",
                                    "type" : "integer"
                                 },
                                 "description" : {
                                    "description" : "User chosen description for this entry.",
                                    "type" : "string"
                                 },
                                 "enable" : {
                                    "default" : 1,
                                    "description" : "Whether this TFA entry is currently enabled.",
                                    "optional" : 1,
                                    "type" : "boolean"
                                 },
                                 "id" : {
                                    "description" : "The id used to reference this entry.",
                                    "type" : "string"
                                 },
                                 "type" : {
                                    "description" : "TFA Entry Type.",
                                    "enum" : [
                                       "totp",
                                       "u2f",
                                       "webauthn",
                                       "recovery"
                                    ],
                                    "type" : "string"
                                 }
                              },
                              "type" : "object"
                           },
                           "type" : "array"
                        }
                     },
                     "POST" : {
                        "allowtoken" : 0,
                        "description" : "Add a TFA entry for a user.",
                        "method" : "POST",
                        "name" : "add_tfa_entry",
                        "parameters" : {
                           "additionalProperties" : 0,
                           "properties" : {
                              "challenge" : {
                                 "description" : "When responding to a u2f challenge: the original challenge string",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "description" : {
                                 "description" : "A description to distinguish multiple entries from one another",
                                 "maxLength" : 255,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "password" : {
                                 "description" : "The current password.",
                                 "maxLength" : 64,
                                 "minLength" : 5,
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "totp" : {
                                 "description" : "A totp URI.",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "type" : {
                                 "description" : "TFA Entry Type.",
                                 "enum" : [
                                    "totp",
                                    "u2f",
                                    "webauthn",
                                    "recovery"
                                 ],
                                 "type" : "string"
                              },
                              "userid" : {
                                 "description" : "User ID",
                                 "format" : "pmg-userid",
                                 "maxLength" : 64,
                                 "minLength" : 4,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              },
                              "value" : {
                                 "description" : "The current value for the provided totp URI, or a Webauthn/U2F challenge response",
                                 "optional" : 1,
                                 "type" : "string",
                                 "typetext" : "<string>"
                              }
                           }
                        },
                        "permissions" : {
                           "check" : [
                              "admin",
                              "qmanager",
                              "audit"
                           ],
                           "description" : "Each user is allowed to modify their own TFA entries. Only root can modify entries of another user."
                        },
                        "protected" : 1,
                        "proxyto" : "master",
                        "returns" : {
                           "properties" : {
                              "challenge" : {
                                 "description" : "When adding u2f entries, this contains a challenge the user must respond to in order to finish the registration.",
                                 "optional" : 1,
                                 "type" : "string"
                              },
                              "id" : {
                                 "description" : "The id of a newly added TFA entry.",
                                 "type" : "string"
                              },
                              "recovery" : {
                                 "description" : "When adding recovery codes, this contains the list of codes to be displayed to the user",
                                 "items" : {
                                    "description" : "A recovery entry.",
                                    "type" : "string"
                                 },
                                 "optional" : 1,
                                 "type" : "array"
                              }
                           },
                           "type" : "object"
                        }
                     }
                  },
                  "leaf" : 0,
                  "path" : "/access/tfa/{userid}",
                  "text" : "{userid}"
               }
            ],
            "info" : {
               "GET" : {
                  "allowtoken" : 0,
                  "description" : "List TFA configurations of users.",
                  "method" : "GET",
                  "name" : "list_tfa",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "description" : "Returns all or just the logged-in user, depending on privileges.",
                     "user" : "all"
                  },
                  "protected" : 1,
                  "proxyto" : "master",
                  "returns" : {
                     "description" : "The list tuples of user and TFA entries.",
                     "items" : {
                        "properties" : {
                           "entries" : {
                              "items" : {
                                 "description" : "TFA Entry.",
                                 "properties" : {
                                    "created" : {
                                       "description" : "Creation time of this entry as unix epoch.",
                                       "type" : "integer"
                                    },
                                    "description" : {
                                       "description" : "User chosen description for this entry.",
                                       "type" : "string"
                                    },
                                    "enable" : {
                                       "default" : 1,
                                       "description" : "Whether this TFA entry is currently enabled.",
                                       "optional" : 1,
                                       "type" : "boolean"
                                    },
                                    "id" : {
                                       "description" : "The id used to reference this entry.",
                                       "type" : "string"
                                    },
                                    "type" : {
                                       "description" : "TFA Entry Type.",
                                       "enum" : [
                                          "totp",
                                          "u2f",
                                          "webauthn",
                                          "recovery"
                                       ],
                                       "type" : "string"
                                    }
                                 },
                                 "type" : "object"
                              },
                              "type" : "array"
                           },
                           "userid" : {
                              "description" : "User this entry belongs to.",
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 0,
            "path" : "/access/tfa",
            "text" : "tfa"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Dummy. Useful for formaters which want to priovde a login page.",
                  "method" : "GET",
                  "name" : "get_ticket",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "user" : "world"
                  },
                  "returns" : {
                     "type" : "null"
                  }
               },
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Create or verify authentication ticket.",
                  "method" : "POST",
                  "name" : "create_ticket",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "otp" : {
                           "description" : "One-time password for Two-factor authentication.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "password" : {
                           "description" : "The secret password. This can also be a valid ticket.",
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "path" : {
                           "description" : "Verify ticket, and check if user have access on 'path'",
                           "maxLength" : 64,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "realm" : {
                           "description" : "You can optionally pass the realm using this parameter. Normally the realm is simply added to the username <username>@<relam>.",
                           "enum" : [
                              "pam",
                              "pmg",
                              "quarantine"
                           ],
                           "maxLength" : 32,
                           "optional" : 1,
                           "type" : "string"
                        },
                        "tfa-challenge" : {
                           "description" : "The signed TFA challenge string the user wants to respond to.",
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "username" : {
                           "description" : "User name",
                           "maxLength" : 64,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "description" : "You need to pass valid credientials.",
                     "user" : "world"
                  },
                  "protected" : 1,
                  "returns" : {
                     "properties" : {
                        "CSRFPreventionToken" : {
                           "optional" : 1,
                           "type" : "string"
                        },
                        "role" : {
                           "optional" : 1,
                           "type" : "string"
                        },
                        "ticket" : {
                           "optional" : 1,
                           "type" : "string"
                        },
                        "username" : {
                           "type" : "string"
                        }
                     },
                     "type" : "object"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/access/ticket",
            "text" : "ticket"
         },
         {
            "info" : {
               "PUT" : {
                  "allowtoken" : 1,
                  "description" : "Change user password.",
                  "method" : "PUT",
                  "name" : "change_passsword",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "password" : {
                           "description" : "The new password.",
                           "maxLength" : 64,
                           "minLength" : 5,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "userid" : {
                           "description" : "User ID",
                           "format" : "pmg-userid",
                           "maxLength" : 64,
                           "minLength" : 4,
                           "type" : "string",
                           "typetext" : "<string>"
                        }
                     }
                  },
                  "permissions" : {
                     "description" : "Each user is allowed to change his own password. Only root can change the password of another user.",
                     "user" : "all"
                  },
                  "protected" : 1,
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/access/password",
            "text" : "password"
         }
      ],
      "info" : {
         "GET" : {
            "allowtoken" : 1,
            "description" : "Directory index.",
            "method" : "GET",
            "name" : "index",
            "parameters" : {
               "additionalProperties" : 0
            },
            "permissions" : {
               "user" : "all"
            },
            "returns" : {
               "items" : {
                  "properties" : {
                     "subdir" : {
                        "type" : "string"
                     }
                  },
                  "type" : "object"
               },
               "links" : [
                  {
                     "href" : "{subdir}",
                     "rel" : "child"
                  }
               ],
               "type" : "array"
            }
         }
      },
      "leaf" : 0,
      "path" : "/access",
      "text" : "access"
   },
   {
      "children" : [
         {
            "info" : {
               "DELETE" : {
                  "allowtoken" : 1,
                  "description" : "Delete user whitelist entries.",
                  "method" : "DELETE",
                  "name" : "whitelist_delete_base",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "address" : {
                           "description" : "The address, or comma-separated list of addresses, you want to remove.",
                           "minLength" : 3,
                           "pattern" : "",
                           "type" : "string"
                        },
                        "pmail" : {
                           "description" : "List entries for the user with this primary email address. Quarantine users cannot specify this parameter, but it is required for all other roles.",
                           "maxLength" : 512,
                           "minLength" : 3,
                           "optional" : 1,
                           "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                           "type" : "string"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "protected" : 1,
                  "returns" : {
                     "type" : "null"
                  }
               },
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Show user whitelist.",
                  "method" : "GET",
                  "name" : "whitelist",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "pmail" : {
                           "description" : "List entries for the user with this primary email address. Quarantine users cannot specify this parameter, but it is required for all other roles.",
                           "maxLength" : 512,
                           "minLength" : 3,
                           "optional" : 1,
                           "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                           "type" : "string"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "address" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               },
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Add user whitelist entries.",
                  "method" : "POST",
                  "name" : "whitelist_add",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "address" : {
                           "description" : "The address you want to add.",
                           "minLength" : 3,
                           "pattern" : "(?:[^\\s\\/\\\\;\\,]+)(?:\\,[^\\s\\/\\\\;\\,]+)*",
                           "type" : "string"
                        },
                        "pmail" : {
                           "description" : "List entries for the user with this primary email address. Quarantine users cannot specify this parameter, but it is required for all other roles.",
                           "maxLength" : 512,
                           "minLength" : 3,
                           "optional" : 1,
                           "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                           "type" : "string"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "protected" : 1,
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/whitelist",
            "text" : "whitelist"
         },
         {
            "info" : {
               "DELETE" : {
                  "allowtoken" : 1,
                  "description" : "Delete user blacklist entries.",
                  "method" : "DELETE",
                  "name" : "blacklist_delete_base",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "address" : {
                           "description" : "The address, or comma-separated list of addresses, you want to remove.",
                           "minLength" : 3,
                           "pattern" : "",
                           "type" : "string"
                        },
                        "pmail" : {
                           "description" : "List entries for the user with this primary email address. Quarantine users cannot specify this parameter, but it is required for all other roles.",
                           "maxLength" : 512,
                           "minLength" : 3,
                           "optional" : 1,
                           "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                           "type" : "string"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "protected" : 1,
                  "returns" : {
                     "type" : "null"
                  }
               },
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Show user blacklist.",
                  "method" : "GET",
                  "name" : "blacklist",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "pmail" : {
                           "description" : "List entries for the user with this primary email address. Quarantine users cannot specify this parameter, but it is required for all other roles.",
                           "maxLength" : 512,
                           "minLength" : 3,
                           "optional" : 1,
                           "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                           "type" : "string"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "address" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               },
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Add user blacklist entries.",
                  "method" : "POST",
                  "name" : "blacklist_add",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "address" : {
                           "description" : "The address you want to add.",
                           "minLength" : 3,
                           "pattern" : "(?:[^\\s\\/\\\\;\\,]+)(?:\\,[^\\s\\/\\\\;\\,]+)*",
                           "type" : "string"
                        },
                        "pmail" : {
                           "description" : "List entries for the user with this primary email address. Quarantine users cannot specify this parameter, but it is required for all other roles.",
                           "maxLength" : 512,
                           "minLength" : 3,
                           "optional" : 1,
                           "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                           "type" : "string"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "protected" : 1,
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/blacklist",
            "text" : "blacklist"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Get a list of receivers of spam in the given timespan (Default the last 24 hours).",
                  "method" : "GET",
                  "name" : "spamusers",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "mail" : {
                              "description" : "the receiving email",
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/spamusers",
            "text" : "spamusers"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Get Spam Quarantine Status",
                  "method" : "GET",
                  "name" : "spamstatus",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "properties" : {
                        "avgbytes" : {
                           "description" : "Average size of stored mails in bytes.",
                           "type" : "number"
                        },
                        "avgspam" : {
                           "description" : "Average spam level.",
                           "type" : "number"
                        },
                        "count" : {
                           "description" : "Number of stored mails.",
                           "type" : "integer"
                        },
                        "mbytes" : {
                           "description" : "Estimated disk space usage in MByte.",
                           "type" : "number"
                        }
                     },
                     "type" : "object"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/spamstatus",
            "text" : "spamstatus"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Get a list of users with whitelist/blacklist settings.",
                  "method" : "GET",
                  "name" : "quarusers",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "list" : {
                           "description" : "If set, limits the result to the given list.",
                           "enum" : [
                              "BL",
                              "WL"
                           ],
                           "optional" : 1,
                           "type" : "string"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "mail" : {
                              "description" : "the receiving email",
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/quarusers",
            "text" : "quarusers"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Get a list of quarantined spam mails in the given timeframe (default the last 24 hours) for the given user.",
                  "method" : "GET",
                  "name" : "spam",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "pmail" : {
                           "description" : "List entries for the user with this primary email address. Quarantine users cannot specify this parameter, but it is required for all other roles.",
                           "maxLength" : 512,
                           "minLength" : 3,
                           "optional" : 1,
                           "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                           "type" : "string"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bytes" : {
                              "description" : "Size of raw email.",
                              "type" : "integer"
                           },
                           "envelope_sender" : {
                              "description" : "SMTP envelope sender.",
                              "type" : "string"
                           },
                           "from" : {
                              "description" : "Header 'From' field.",
                              "type" : "string"
                           },
                           "id" : {
                              "description" : "Unique ID",
                              "type" : "string"
                           },
                           "receiver" : {
                              "description" : "Receiver email address",
                              "type" : "string"
                           },
                           "sender" : {
                              "description" : "Header 'Sender' field.",
                              "optional" : 1,
                              "type" : "string"
                           },
                           "spamlevel" : {
                              "description" : "Spam score.",
                              "type" : "number"
                           },
                           "subject" : {
                              "description" : "Header 'Subject' field.",
                              "type" : "string"
                           },
                           "time" : {
                              "description" : "Receive time stamp",
                              "type" : "integer"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/spam",
            "text" : "spam"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Get a list of quarantined virus mails in the given timeframe (default the last 24 hours).",
                  "method" : "GET",
                  "name" : "virus",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bytes" : {
                              "description" : "Size of raw email.",
                              "type" : "integer"
                           },
                           "envelope_sender" : {
                              "description" : "SMTP envelope sender.",
                              "type" : "string"
                           },
                           "from" : {
                              "description" : "Header 'From' field.",
                              "type" : "string"
                           },
                           "id" : {
                              "description" : "Unique ID",
                              "type" : "string"
                           },
                           "receiver" : {
                              "description" : "Receiver email address",
                              "type" : "string"
                           },
                           "sender" : {
                              "description" : "Header 'Sender' field.",
                              "optional" : 1,
                              "type" : "string"
                           },
                           "subject" : {
                              "description" : "Header 'Subject' field.",
                              "type" : "string"
                           },
                           "time" : {
                              "description" : "Receive time stamp",
                              "type" : "integer"
                           },
                           "virusname" : {
                              "description" : "Virus name.",
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/virus",
            "text" : "virus"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Get a list of quarantined attachment mails in the given timeframe (default the last 24 hours).",
                  "method" : "GET",
                  "name" : "attachment",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bytes" : {
                              "description" : "Size of raw email.",
                              "type" : "integer"
                           },
                           "envelope_sender" : {
                              "description" : "SMTP envelope sender.",
                              "type" : "string"
                           },
                           "from" : {
                              "description" : "Header 'From' field.",
                              "type" : "string"
                           },
                           "id" : {
                              "description" : "Unique ID",
                              "type" : "string"
                           },
                           "receiver" : {
                              "description" : "Receiver email address",
                              "type" : "string"
                           },
                           "sender" : {
                              "description" : "Header 'Sender' field.",
                              "optional" : 1,
                              "type" : "string"
                           },
                           "subject" : {
                              "description" : "Header 'Subject' field.",
                              "type" : "string"
                           },
                           "time" : {
                              "description" : "Receive time stamp",
                              "type" : "integer"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/attachment",
            "text" : "attachment"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Get Virus Quarantine Status",
                  "method" : "GET",
                  "name" : "virusstatus",
                  "parameters" : {
                     "additionalProperties" : 0
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "properties" : {
                        "avgbytes" : {
                           "description" : "Average size of stored mails in bytes.",
                           "type" : "number"
                        },
                        "count" : {
                           "description" : "Number of stored mails.",
                           "type" : "integer"
                        },
                        "mbytes" : {
                           "description" : "Estimated disk space usage in MByte.",
                           "type" : "number"
                        }
                     },
                     "type" : "object"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/virusstatus",
            "text" : "virusstatus"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Get email data. There is a special formatter called 'htmlmail' to get sanitized html view of the mail content (use the '/api2/htmlmail/quarantine/content' url).",
                  "method" : "GET",
                  "name" : "content",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "id" : {
                           "description" : "Unique ID",
                           "maxLength" : 60,
                           "pattern" : "C\\d+R\\d+T\\d+",
                           "type" : "string"
                        },
                        "raw" : {
                           "default" : 0,
                           "description" : "Display 'raw' eml data. Deactivates size limit.",
                           "optional" : 1,
                           "type" : "boolean",
                           "typetext" : "<boolean>"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "returns" : {
                     "properties" : {
                        "bytes" : {
                           "description" : "Size of raw email.",
                           "type" : "integer"
                        },
                        "content" : {
                           "description" : "Raw email data (first 4096 bytes). Useful for preview. NOTE: The  'htmlmail' formatter displays the whole email.",
                           "type" : "string"
                        },
                        "envelope_sender" : {
                           "description" : "SMTP envelope sender.",
                           "type" : "string"
                        },
                        "from" : {
                           "description" : "Header 'From' field.",
                           "type" : "string"
                        },
                        "header" : {
                           "description" : "Raw email header data.",
                           "type" : "string"
                        },
                        "id" : {
                           "description" : "Unique ID",
                           "type" : "string"
                        },
                        "receiver" : {
                           "description" : "Receiver email address",
                           "type" : "string"
                        },
                        "sender" : {
                           "description" : "Header 'Sender' field.",
                           "optional" : 1,
                           "type" : "string"
                        },
                        "spaminfo" : {
                           "description" : "Information about matched spam tests (name, score, desc, url).",
                           "type" : "array"
                        },
                        "spamlevel" : {
                           "description" : "Spam score.",
                           "type" : "number"
                        },
                        "subject" : {
                           "description" : "Header 'Subject' field.",
                           "type" : "string"
                        },
                        "time" : {
                           "description" : "Receive time stamp",
                           "type" : "integer"
                        }
                     },
                     "type" : "object"
                  }
               },
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Execute quarantine actions.",
                  "method" : "POST",
                  "name" : "action",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "action" : {
                           "description" : "Action - specify what you want to do with the mail.",
                           "enum" : [
                              "whitelist",
                              "blacklist",
                              "deliver",
                              "delete"
                           ],
                           "type" : "string"
                        },
                        "id" : {
                           "description" : "Unique IDs, separate with ;",
                           "pattern" : "C\\d+R\\d+T\\d+(;C\\d+R\\d+T\\d+)*",
                           "type" : "string"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "quser"
                     ]
                  },
                  "protected" : 1,
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/content",
            "text" : "content"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Get Attachments for E-Mail in Quarantine.",
                  "method" : "GET",
                  "name" : "listattachments",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "id" : {
                           "description" : "Unique ID",
                           "maxLength" : 60,
                           "pattern" : "C\\d+R\\d+T\\d+",
                           "type" : "string"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "content-type" : {
                              "description" : "Raw email header data.",
                              "type" : "string"
                           },
                           "id" : {
                              "description" : "Attachment ID",
                              "type" : "integer"
                           },
                           "name" : {
                              "description" : "Raw email header data.",
                              "type" : "string"
                           },
                           "size" : {
                              "description" : "Size of raw attachment in bytes.",
                              "type" : "integer"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/listattachments",
            "text" : "listattachments"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Download E-Mail or Attachment from Quarantine.",
                  "download" : 1,
                  "method" : "GET",
                  "name" : "download",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "attachmentid" : {
                           "description" : "The Attachment ID for the mail.",
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer>"
                        },
                        "mailid" : {
                           "description" : "Unique ID",
                           "maxLength" : 60,
                           "pattern" : "C\\d+R\\d+T\\d+",
                           "type" : "string"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit",
                        "quser"
                     ]
                  },
                  "returns" : {
                     "type" : "object"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/download",
            "text" : "download"
         },
         {
            "info" : {
               "POST" : {
                  "allowtoken" : 1,
                  "description" : "Send Quarantine link to given e-mail.",
                  "method" : "POST",
                  "name" : "sendlink",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "mail" : {
                           "description" : "Email Address (allow most characters).",
                           "maxLength" : 512,
                           "minLength" : 3,
                           "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                           "type" : "string"
                        }
                     }
                  },
                  "permissions" : {
                     "user" : "world"
                  },
                  "protected" : 1,
                  "returns" : {
                     "type" : "null"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/quarantine/sendlink",
            "text" : "sendlink"
         }
      ],
      "info" : {
         "GET" : {
            "allowtoken" : 1,
            "description" : "Directory index.",
            "method" : "GET",
            "name" : "index",
            "parameters" : {
               "additionalProperties" : 0
            },
            "permissions" : {
               "user" : "all"
            },
            "returns" : {
               "items" : {
                  "properties" : {},
                  "type" : "object"
               },
               "links" : [
                  {
                     "href" : "{name}",
                     "rel" : "child"
                  }
               ],
               "type" : "array"
            }
         }
      },
      "leaf" : 0,
      "path" : "/quarantine",
      "text" : "quarantine"
   },
   {
      "children" : [
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Contact Address Statistics.",
                  "method" : "GET",
                  "name" : "contact",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "filter" : {
                           "description" : "Contact address filter.",
                           "maxLength" : 512,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "orderby" : {
                           "description" : "Remote sorting configuration(JSON, ExtJS compatible).",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bytes" : {
                              "description" : "Mail traffic (Bytes).",
                              "type" : "number"
                           },
                           "contact" : {
                              "description" : "Contact email.",
                              "type" : "string"
                           },
                           "count" : {
                              "description" : "Mail count.",
                              "optional" : 1,
                              "type" : "number"
                           },
                           "viruscount" : {
                              "description" : "Number of sent virus mails.",
                              "optional" : 1,
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{contact}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/contact",
            "text" : "contact"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Detailed Statistics.",
                  "method" : "GET",
                  "name" : "detailstats",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "address" : {
                           "description" : "Email address.",
                           "maxLength" : 512,
                           "minLength" : 3,
                           "pattern" : "(?:[^\\s\\\\@]+\\@[^\\s\\/\\\\@]+)",
                           "type" : "string"
                        },
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "filter" : {
                           "description" : "Address filter.",
                           "maxLength" : 512,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "orderby" : {
                           "description" : "Remote sorting configuration(JSON, ExtJS compatible).",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "type" : {
                           "description" : "Type of statistics",
                           "enum" : [
                              "contact",
                              "sender",
                              "receiver"
                           ],
                           "type" : "string"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "blocked" : {
                              "description" : "Mail was blocked.",
                              "type" : "boolean"
                           },
                           "bytes" : {
                              "description" : "Mail traffic (Bytes).",
                              "type" : "number"
                           },
                           "receiver" : {
                              "description" : "Receiver email. (for sender statistics)",
                              "optional" : 1,
                              "type" : "string"
                           },
                           "sender" : {
                              "description" : "Sender email. (for contact and receiver statistics)",
                              "optional" : 1,
                              "type" : "string"
                           },
                           "spamlevel" : {
                              "description" : "Spam score.",
                              "type" : "number"
                           },
                           "time" : {
                              "description" : "Receive time stamp",
                              "type" : "integer"
                           },
                           "virusinfo" : {
                              "description" : "Virus name.",
                              "optional" : 1,
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/detail",
            "text" : "detail"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Sender Address Statistics.",
                  "method" : "GET",
                  "name" : "sender",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "filter" : {
                           "description" : "Sender address filter.",
                           "maxLength" : 512,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "orderby" : {
                           "description" : "Remote sorting configuration(JSON, ExtJS compatible).",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bytes" : {
                              "description" : "Mail traffic (Bytes).",
                              "type" : "number"
                           },
                           "count" : {
                              "description" : "Mail count.",
                              "optional" : 1,
                              "type" : "number"
                           },
                           "sender" : {
                              "description" : "Sender email.",
                              "type" : "string"
                           },
                           "viruscount" : {
                              "description" : "Number of sent virus mails.",
                              "optional" : 1,
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{sender}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/sender",
            "text" : "sender"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Receiver Address Statistics.",
                  "method" : "GET",
                  "name" : "receiver",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "filter" : {
                           "description" : "Receiver address filter.",
                           "maxLength" : 512,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "orderby" : {
                           "description" : "Remote sorting configuration(JSON, ExtJS compatible).",
                           "maxLength" : 4096,
                           "optional" : 1,
                           "type" : "string",
                           "typetext" : "<string>"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bytes" : {
                              "description" : "Mail traffic (Bytes).",
                              "type" : "number"
                           },
                           "count" : {
                              "description" : "Mail count.",
                              "optional" : 1,
                              "type" : "number"
                           },
                           "receiver" : {
                              "description" : "Sender email.",
                              "type" : "string"
                           },
                           "spamcount" : {
                              "description" : "Number of sent spam mails.",
                              "optional" : 1,
                              "type" : "number"
                           },
                           "viruscount" : {
                              "description" : "Number of sent virus mails.",
                              "optional" : 1,
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "links" : [
                        {
                           "href" : "{receiver}",
                           "rel" : "child"
                        }
                     ],
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/receiver",
            "text" : "receiver"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Mail Domains Statistics.",
                  "method" : "GET",
                  "name" : "domains",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bytes_in" : {
                              "description" : "Incoming mail traffic (Bytes).",
                              "type" : "number"
                           },
                           "bytes_out" : {
                              "description" : "Outgoing mail traffic (Bytes).",
                              "type" : "number"
                           },
                           "count_in" : {
                              "description" : "Incoming mail count.",
                              "type" : "number"
                           },
                           "count_out" : {
                              "description" : "Outgoing mail count.",
                              "type" : "number"
                           },
                           "domain" : {
                              "description" : "Domain name.",
                              "type" : "string"
                           },
                           "spamcount_in" : {
                              "description" : "Incoming spam mails.",
                              "type" : "number"
                           },
                           "spamcount_out" : {
                              "description" : "Outgoing spam mails.",
                              "type" : "number"
                           },
                           "viruscount_in" : {
                              "description" : "Number of incoming virus mails.",
                              "type" : "number"
                           },
                           "viruscount_out" : {
                              "description" : "Number of outgoing virus mails.",
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/domains",
            "text" : "domains"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "General Mail Statistics.",
                  "method" : "GET",
                  "name" : "mail",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "properties" : {
                        "avptime" : {
                           "description" : "Average mail processing time in seconds.",
                           "type" : "number"
                        },
                        "bounces_in" : {
                           "description" : "Incoming bounce mail count (sender = <>).",
                           "type" : "number"
                        },
                        "bounces_out" : {
                           "description" : "Outgoing bounce mail count (sender = <>).",
                           "type" : "number"
                        },
                        "bytes_in" : {
                           "description" : "Incoming mail traffic (bytes).",
                           "type" : "number"
                        },
                        "bytes_out" : {
                           "description" : "Outgoing mail traffic (bytes).",
                           "type" : "number"
                        },
                        "count" : {
                           "description" : "Overall mail count (in and out).",
                           "type" : "number"
                        },
                        "count_in" : {
                           "description" : "Incoming mail count.",
                           "type" : "number"
                        },
                        "count_out" : {
                           "description" : "Outgoing mail count.",
                           "type" : "number"
                        },
                        "glcount" : {
                           "description" : "Number of greylisted mails.",
                           "type" : "number"
                        },
                        "junk_in" : {
                           "description" : "Incoming junk mail count (viruscount_in + spamcount_in + glcount + spfcount + rbl_rejects + pregreet_rejects).",
                           "type" : "number"
                        },
                        "junk_out" : {
                           "description" : "Outgoing junk mail count (viruscount_out + spamcount_out).",
                           "type" : "number"
                        },
                        "pregreet_rejects" : {
                           "description" : "PREGREET recject count.",
                           "type" : "integer"
                        },
                        "rbl_rejects" : {
                           "description" : "Number of RBL rejects.",
                           "type" : "integer"
                        },
                        "spamcount_in" : {
                           "description" : "Incoming spam mails.",
                           "type" : "number"
                        },
                        "spamcount_out" : {
                           "description" : "Outgoing spam mails.",
                           "type" : "number"
                        },
                        "spfcount" : {
                           "description" : "Mails rejected by SPF.",
                           "type" : "number"
                        },
                        "viruscount_in" : {
                           "description" : "Number of incoming virus mails.",
                           "type" : "number"
                        },
                        "viruscount_out" : {
                           "description" : "Number of outgoing virus mails.",
                           "type" : "number"
                        }
                     },
                     "type" : "object"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/mail",
            "text" : "mail"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Mail Count Statistics.",
                  "method" : "GET",
                  "name" : "recent",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "hours" : {
                           "default" : 12,
                           "description" : "How many hours you want to get",
                           "maximum" : 24,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 24)"
                        },
                        "timespan" : {
                           "default" : 1800,
                           "description" : "The Timespan for one datapoint (in seconds)",
                           "maximum" : 1800,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 1800)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bytes_in" : {
                              "description" : "Number of incoming bytes mails.",
                              "type" : "number"
                           },
                           "bytes_out" : {
                              "description" : "Number of outgoing bytes mails.",
                              "type" : "number"
                           },
                           "count" : {
                              "description" : "Overall mail count (in and out).",
                              "type" : "number"
                           },
                           "count_in" : {
                              "description" : "Incoming mail count.",
                              "type" : "number"
                           },
                           "count_out" : {
                              "description" : "Outgoing mail count.",
                              "type" : "number"
                           },
                           "index" : {
                              "description" : "Time index.",
                              "type" : "integer"
                           },
                           "spam" : {
                              "description" : "Overall spam mail count (in and out).",
                              "type" : "number"
                           },
                           "spam_in" : {
                              "description" : "Incoming spam mails (spamcount_in + glcount + spfcount).",
                              "type" : "number"
                           },
                           "spam_out" : {
                              "description" : "Outgoing spam mails.",
                              "type" : "number"
                           },
                           "time" : {
                              "description" : "Time (Unix epoch).",
                              "type" : "integer"
                           },
                           "timespan" : {
                              "description" : "Timespan in seconds for one data point",
                              "type" : "number"
                           },
                           "virus_in" : {
                              "description" : "Number of incoming virus mails.",
                              "type" : "number"
                           },
                           "virus_out" : {
                              "description" : "Number of outgoing virus mails.",
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/recent",
            "text" : "recent"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Top recent Mail Receivers (including spam)",
                  "method" : "GET",
                  "name" : "recentreceivers",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "hours" : {
                           "default" : 12,
                           "description" : "How many hours you want to get",
                           "maximum" : 24,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 24)"
                        },
                        "limit" : {
                           "default" : 5,
                           "description" : "The maximum number of receivers to return.",
                           "maximum" : 50,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 50)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "count" : {
                              "description" : "The count of incoming not blocked E-Mails",
                              "type" : "integer"
                           },
                           "receiver" : {
                              "description" : "The receiver",
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/recentreceivers",
            "text" : "recentreceivers"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Mail Count Statistics.",
                  "method" : "GET",
                  "name" : "mailcount",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "timespan" : {
                           "default" : 3600,
                           "description" : "Return Mails/<timespan>, where <timespan> is specified in seconds.",
                           "maximum" : 31622400,
                           "minimum" : 3600,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (3600 - 31622400)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bounces_in" : {
                              "description" : "Incoming bounce mail count (sender = <>).",
                              "type" : "number"
                           },
                           "bounces_out" : {
                              "description" : "Outgoing bounce mail count (sender = <>).",
                              "type" : "number"
                           },
                           "count" : {
                              "description" : "Overall mail count (in and out).",
                              "type" : "number"
                           },
                           "count_in" : {
                              "description" : "Incoming mail count.",
                              "type" : "number"
                           },
                           "count_out" : {
                              "description" : "Outgoing mail count.",
                              "type" : "number"
                           },
                           "index" : {
                              "description" : "Time index.",
                              "type" : "integer"
                           },
                           "pregreet_rejects" : {
                              "description" : "PREGREET recject count.",
                              "type" : "integer"
                           },
                           "rbl_rejects" : {
                              "description" : "Number of RBL rejects.",
                              "type" : "integer"
                           },
                           "spamcount_in" : {
                              "description" : "Incoming spam mails (spamcount_in + glcount + spfcount + rbl_rejects + pregreet_rejects).",
                              "type" : "number"
                           },
                           "spamcount_out" : {
                              "description" : "Outgoing spam mails.",
                              "type" : "number"
                           },
                           "time" : {
                              "description" : "Time (Unix epoch).",
                              "type" : "integer"
                           },
                           "viruscount_in" : {
                              "description" : "Number of incoming virus mails.",
                              "type" : "number"
                           },
                           "viruscount_out" : {
                              "description" : "Number of outgoing virus mails.",
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/mailcount",
            "text" : "mailcount"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Get Statistics about detected Viruses.",
                  "method" : "GET",
                  "name" : "virus",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "count" : {
                              "description" : "Detection count.",
                              "type" : "integer"
                           },
                           "name" : {
                              "description" : "Virus name.",
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/virus",
            "text" : "virus"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Get the count of spam mails grouped by spam score. Count for score 10 includes mails with spam score > 10.",
                  "method" : "GET",
                  "name" : "spamscores",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "count" : {
                              "description" : "Detection count.",
                              "type" : "integer"
                           },
                           "level" : {
                              "description" : "Spam level.",
                              "type" : "string"
                           },
                           "ratio" : {
                              "description" : "Portion of overall mail count.",
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/spamscores",
            "text" : "spamscores"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Get the count of spam mails grouped by spam score. Count for score 10 includes mails with spam score > 10.",
                  "method" : "GET",
                  "name" : "maildistribution",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "bounces_in" : {
                              "description" : "Incoming bounce mail count (sender = <>).",
                              "type" : "number"
                           },
                           "bounces_out" : {
                              "description" : "Outgoing bounce mail count (sender = <>).",
                              "type" : "number"
                           },
                           "count" : {
                              "description" : "Overall mail count (in and out).",
                              "type" : "number"
                           },
                           "count_in" : {
                              "description" : "Incoming mail count.",
                              "type" : "number"
                           },
                           "count_out" : {
                              "description" : "Outgoing mail count.",
                              "type" : "number"
                           },
                           "index" : {
                              "description" : "Hour (0-23).",
                              "type" : "integer"
                           },
                           "spamcount_in" : {
                              "description" : "Incoming spam mails (spamcount_in + glcount + spfcount).",
                              "type" : "number"
                           },
                           "spamcount_out" : {
                              "description" : "Outgoing spam mails.",
                              "type" : "number"
                           },
                           "viruscount_in" : {
                              "description" : "Number of incoming virus mails.",
                              "type" : "number"
                           },
                           "viruscount_out" : {
                              "description" : "Number of outgoing virus mails.",
                              "type" : "number"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/maildistribution",
            "text" : "maildistribution"
         },
         {
            "info" : {
               "GET" : {
                  "allowtoken" : 1,
                  "description" : "Early SMTP reject count statistic (RBL, PREGREET rejects with postscreen)",
                  "method" : "GET",
                  "name" : "rejectcount",
                  "parameters" : {
                     "additionalProperties" : 0,
                     "properties" : {
                        "day" : {
                           "description" : "Day of month. Get statistics for a single day.",
                           "maximum" : 31,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 31)"
                        },
                        "endtime" : {
                           "description" : "Only consider entries older than 'endtime' (unix epoch). This is set to '<start> + 1day' by default.",
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - N)"
                        },
                        "month" : {
                           "description" : "Month. You will get statistics for the whole month if you do not specify a day.",
                           "maximum" : 12,
                           "minimum" : 1,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1 - 12)"
                        },
                        "starttime" : {
                           "description" : "Only consider entries newer than 'starttime' (unix epoch). Default is 'now - 1day'.",
                           "minimum" : 0,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (0 - N)"
                        },
                        "timespan" : {
                           "default" : 3600,
                           "description" : "Return RBL/PREGREET rejects/<timespan>, where <timespan> is specified in seconds.",
                           "maximum" : 31622400,
                           "minimum" : 3600,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (3600 - 31622400)"
                        },
                        "year" : {
                           "description" : "Year. Defaults to current year. You will get statistics for the whole year if you do not specify a month or day.",
                           "maximum" : 3000,
                           "minimum" : 1900,
                           "optional" : 1,
                           "type" : "integer",
                           "typetext" : "<integer> (1900 - 3000)"
                        }
                     }
                  },
                  "permissions" : {
                     "check" : [
                        "admin",
                        "qmanager",
                        "audit"
                     ]
                  },
                  "returns" : {
                     "items" : {
                        "properties" : {
                           "index" : {
                              "description" : "Time index.",
                              "type" : "integer"
                           },
                           "pregreet_rejects" : {
                              "description" : "PREGREET recject count.",
                              "type" : "integer"
                           },
                           "rbl_rejects" : {
                              "description" : "RBL recject count.",
                              "type" : "integer"
                           },
                           "time" : {
                              "description" : "Time (Unix epoch).",
                              "type" : "integer"
                           }
                        },
                        "type" : "object"
                     },
                     "type" : "array"
                  }
               }
            },
            "leaf" : 1,
            "path" : "/statistics/rejectcount",
            "text" : "rejectcount"
         }
      ],
      "info" : {
         "GET" : {
            "allowtoken" : 1,
            "description" : "Directory index.",
            "method" : "GET",
            "name" : "index",
            "parameters" : {
               "additionalProperties" : 0
            },
            "permissions" : {
               "check" : [
                  "admin",
                  "qmanager",
                  "audit"
               ]
            },
            "returns" : {
               "items" : {
                  "properties" : {},
                  "type" : "object"
               },
               "links" : [
                  {
                     "href" : "{name}",
                     "rel" : "child"
                  }
               ],
               "type" : "array"
            }
         }
      },
      "leaf" : 0,
      "path" : "/statistics",
      "text" : "statistics"
   },
   {
      "info" : {
         "GET" : {
            "allowtoken" : 1,
            "description" : "API version details.",
            "method" : "GET",
            "name" : "version",
            "parameters" : {
               "additionalProperties" : 0
            },
            "permissions" : {
               "user" : "all"
            },
            "returns" : {
               "properties" : {
                  "release" : {
                     "description" : "The current installed Proxmox Mailgateway Release",
                     "type" : "string"
                  },
                  "repoid" : {
                     "description" : "The short git commit hash ID from which this version was build",
                     "type" : "string"
                  },
                  "version" : {
                     "description" : "The current installed pmg-api package version",
                     "type" : "string"
                  }
               },
               "type" : "object"
            }
         }
      },
      "leaf" : 1,
      "path" : "/version",
      "text" : "version"
   }
]
;

