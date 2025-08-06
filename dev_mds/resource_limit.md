            # Check if this is a resource limit error
            error_str = str(db_error).lower()
            if 'resource limit exceeded' in error_str or 'p0001' in error_str:
                log_agent_event(
                    logger,
                    "Resource creation failed: user resource limit exceeded",
                    level="WARNING",
                    user_id=user_id,
                    action="add_resource_limit_exceeded",
                    agent_name="retrieval_agent"
                )
                return "Error: Resource limit exceeded. You have reached the maximum number of resources allowed. Please delete some existing resources before adding new ones."
            else:
                # Re-raise other database errors
                raise db_error