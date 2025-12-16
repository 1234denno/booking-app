import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Service } from '../data/services';

type Props = {
  service: Service;
  onPress: () => void;
};

export function ServiceCard({ service, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{service.name}</Text>
      <Text style={styles.description}>{service.description}</Text>

      <View style={styles.meta}>
        <Text>{service.duration} min</Text>
        <Text>KES {service.price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    marginVertical: 6,
    color: '#555',
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Service } from '../data/services';

type Props = {
  service: Service;
  onPress: () => void;
};

export function ServiceCard({ service, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{service.name}</Text>
      <Text style={styles.description}>{service.description}</Text>
      <View style={styles.meta}>
        <Text>{service.duration} min</Text>
        <Text>KES {service.price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: '600' },
  description: { marginVertical: 6, color: '#555' },
  meta: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
});
