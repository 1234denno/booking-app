import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { services } from '../../data/services';

export default function ServiceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const service = services.find((s) => s.id === id);

  if (!service) {
    return <Text>Service not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{service.name}</Text>
      <Text style={styles.description}>{service.description}</Text>

      <Text style={styles.meta}>
        Duration: {service.duration} minutes
      </Text>
      <Text style={styles.meta}>
        Price: KES {service.price}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/booking/create')}
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  meta: {
    fontSize: 14,
    marginBottom: 6,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { services } from '../../data/services';

export default function ServiceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const service = services.find((s) => s.id === id);

  if (!service) return <Text>Service not found</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{service.name}</Text>
      <Text style={styles.description}>{service.description}</Text>
      <Text style={styles.meta}>Duration: {service.duration} minutes</Text>
      <Text style={styles.meta}>Price: KES {service.price}</Text>
      <Pressable style={styles.button} onPress={() => router.push('/booking/create')}>
        <Text style={styles.buttonText}>Book Now</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  description: { fontSize: 16, marginBottom: 16 },
  meta: { fontSize: 14, marginBottom: 6 },
  button: { marginTop: 24, backgroundColor: '#000', padding: 14, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});

